document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-presenca');
    const lista = document.getElementById('presencas');
  
    async function carregarPresencas() {
      const { data, error } = await supabase
        .from('presencas')
        .select('*')
        .order('data', { ascending: false });
  
      if (error) {
        console.error('Erro ao carregar presenças:', error.message);
        return;
      }
  
      lista.innerHTML = '';
      data.forEach(item => {
        const li = document.createElement('li');
        const dataFormatada = new Date(item.data).toLocaleDateString();
        li.textContent = `${item.aluno} - ${dataFormatada}`;
        lista.appendChild(li);
      });
    }
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const aluno = form.aluno.value.trim();
      const dataInput = form.data.value;
      const dataPresenca = dataInput ? new Date(dataInput) : new Date();
      const dataISO = dataPresenca.toISOString().split('T')[0];
  
      if (!aluno) {
        alert('Digite o nome do aluno.');
        return;
      }
  
      const { error } = await supabase.from('presencas').insert([
        { aluno, data: dataISO }
      ]);
  
      if (error) {
        alert('Erro ao registrar presença.');
        console.error(error.message);
      } else {
        alert('Presença registrada com sucesso!');
        form.reset();
        carregarPresencas();
      }
    });
  
    carregarPresencas();
  });
  