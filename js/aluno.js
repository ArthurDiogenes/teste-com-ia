document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-aluno');
    const resultado = document.getElementById('resultado');
    const lista = document.getElementById('lista-datas');
    const percentual = document.getElementById('percentual');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const nome = document.getElementById('aluno-nome').value.trim();
  
      if (!nome) {
        alert('Digite seu nome.');
        return;
      }
  
      const { data, error } = await supabase
        .from('presencas')
        .select('*')
        .ilike('aluno', nome);
  
      if (error) {
        alert('Erro ao buscar dados.');
        console.error(error.message);
        return;
      }
  
      lista.innerHTML = '';
      if (!data.length) {
        percentual.textContent = 'Nenhuma presença registrada.';
        resultado.hidden = false;
        return;
      }
  
      data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = new Date(item.data).toLocaleDateString();
        lista.appendChild(li);
      });
  
      const totalAulas = 20; // Você pode ajustar esse valor conforme o semestre
      const presencas = data.length;
      const perc = ((presencas / totalAulas) * 100).toFixed(1);
  
      percentual.textContent = `Presenças: ${presencas}/${totalAulas} (${perc}%)`;
      resultado.hidden = false;
    });
  });
  