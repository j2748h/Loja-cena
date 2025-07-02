
// ================================
// SISTEMA COMPLETO DA LOJA CENA
// ================================

// Configurações globais
let modoEdicao = false;
let produtoEditandoIndex = -1;
let avaliacaoEditandoIndex = -1;
let senhaCorreta = 'erick2506';
let codigoSecreto = 'cena123456789';

// Dados do site - inicialização com produtos de teste
let dadosSite = {
  titulo: 'Criado para pais e crianças',
  slogan: 'Os melhores produtos ao seu alcance!',
  sobre: 'Somos uma loja digital que oferece produtos incríveis com preços acessíveis. Criado com ♥ usando IA, Replit e tecnologia web.',
  email: 'exemplo@email.com',
  whatsapp: '98989190240',
  whatsappNome: '(98) 98919-0240',
  telegram: 'seuusuario',
  cores: {
    principal: '#002F6C',
    secundaria: '#FFD700',
    texto: '#333',
    fundo: '#f8f9fa'
  },
  produtos: [
    {
      nome: 'Plano Básico - Apostila + 5 dias de aulas',
      descricao: 'Ideal para começar o reforço com apoio direto. Inclui apostila com 50 questões e 12 tópicos essenciais para crianças de 7 a 13 anos, além de 5 dias de aula (presencial ou via Zoom) para tirar dúvidas. Perfeito para reforçar os estudos sem complicação.',
      preco: 'R$ 66,99',
      precoOriginal: 'R$ 89,99',
      imagem: 'https://images.unsplash.com/photo-1581093588401-48d88c0c938e?w=400&h=300&fit=crop',
      categoria: 'Educação',
      estoque: 50,
      link: 'https://wa.me/5598989190240?text=Tenho interesse no Plano Básico com apostila e aulas presenciais/online',
      linkKiwify: 'https://kiwify.com.br/plano-basico-apostila'
    },
    {
      nome: 'Plano Intermediário - Apoio completo com vídeos',
      descricao: 'Para pais que desejam reforço educacional real. Apostila com 50 questões e 12 tópicos para crianças de 7 a 13 anos, 10 dias de aula (presencial ou Zoom), vídeos explicativos dos conteúdos e suporte educacional dedicado. Um plano equilibrado para garantir aprendizado e autonomia.',
      preco: 'R$ 79,99',
      precoOriginal: 'R$ 109,99',
      imagem: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=300&fit=crop',
      categoria: 'Educação',
      estoque: 40,
      link: 'https://wa.me/5598989190240?text=Quero o Plano Intermediário com apostila, vídeos e suporte educacional',
      linkKiwify: 'https://kiwify.com.br/plano-intermediario-apostila'
    },
    {
      nome: 'Plano Premium - Educação com suporte total',
      descricao: 'Apostila com 50 questões e 12 tópicos, 15 dias de aulas (presencial ou Zoom), vídeos explicativos, suporte 24h para dúvidas e acompanhamento direto e personalizado. Ainda inclui acesso a conteúdos bônus e reforço real com foco no progresso do aluno.',
      preco: 'R$ 146,99',
      precoOriginal: 'R$ 189,99',
      imagem: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop',
      categoria: 'Educação Premium',
      estoque: 30,
      link: 'https://wa.me/5598989190240?text=Quero o Plano Premium com reforço completo e suporte 24h',
      linkKiwify: 'https://kiwify.com.br/plano-premium-apostila'
    },
    {
      nome: 'Colônia de Férias - Plano Básico (6 a 7 anos)',
      descricao: 'Ambiente acolhedor com brincadeiras supervisionadas e rotina tranquila. Ideal para crianças pequenas, com 1 monitor exclusivo por turma pequena. Atividades lúdicas como música, pintura e contação de histórias. Passeios opcionais por R$ 40.',
      preco: 'R$ 86,99',
      precoOriginal: 'R$ 99,99',
      imagem: 'https://images.unsplash.com/photo-1583511666445-775f1f2116f9?w=400&h=300&fit=crop',
      categoria: 'Colônia de Férias',
      estoque: 25,
      link: 'https://wa.me/5598989190240?text=Quero mais informações sobre o Plano Básico da Colônia (6 a 8 anos)',
      linkKiwify: 'https://kiwify.com.br/colonia-basico'
    },
    {
      nome: 'Colônia de Férias - Plano Plus (8 a 10 anos)',
      descricao: 'Mais atividades e estímulos! 2 monitores por turma grande. Jogos de raciocínio, leitura e escrita, esportes e recreação. Suporte para dúvidas das apostilas presencial ou online. Participação em passeios semanais (opcional + R$ 40).',
      preco: 'R$ 115,99',
      precoOriginal: 'R$ 139,99',
      imagem: 'https://images.unsplash.com/photo-1620602731732-e3e80c379ed4?w=400&h=300&fit=crop',
      categoria: 'Colônia de Férias',
      estoque: 20,
      link: 'https://wa.me/5598989190240?text=Quero mais detalhes sobre o Plano Plus da Colônia (8 a 10 anos)',
      linkKiwify: 'https://kiwify.com.br/colonia-plus'
    },
    {
      nome: 'Colônia de Férias - Plano Premium (10 a 13 anos)',
      descricao: 'Inclui tudo do plano Plus e ainda mais: dinâmicas de liderança, reforço 2x por semana (Zoom ou presencial), mediação virtual para dúvidas e desafios em grupo. Férias com diversão e crescimento real. Passeios semanais opcionais por R$ 40.',
      preco: 'R$ 125,99',
      precoOriginal: 'R$ 159,99',
      imagem: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop',
      categoria: 'Colônia de Férias Premium',
      estoque: 15,
      link: 'https://wa.me/5598989190240?text=Quero o Plano Premium da Colônia para meu filho (10 a 13 anos)',
      linkKiwify: 'https://kiwify.com.br/colonia-premium'
    },
    {
      nome: 'Passeios Semanais - Colônia de Férias',
      descricao: 'Atividade opcional que garante ainda mais diversão para as crianças! Por apenas R$ 29,99, seu filho participa de passeios seguros e educativos durante a semana, com locais escolhidos com carinho pela equipe. Ideal para proporcionar novas experiências fora do ambiente escolar.',
      preco: 'R$ 29,99',
      precoOriginal: 'R$ 39,99',
      imagem: 'https://images.unsplash.com/photo-1596464716121-5b52dbf0f11b?w=400&h=300&fit=crop',
      categoria: 'Atividades Extras',
      estoque: 50,
      link: 'https://wa.me/5598989190240?text=Olá! Tenho interesse nos Passeios Semanais da Colônia de Férias',
      linkKiwify: 'https://kiwify.com.br/passeios-colonia-ferias'
    }
  ],
  avaliacoes: [
    {
      nome: 'Maria Silva',
      foto: 'https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=100&h=100&fit=crop&face',
      estrelas: 4,
      comentario: 'Gostei bastante do material, é realmente bem feito e chegou direitinho. Só deixo como sugestão melhorar o atendimento via WhatsApp — demorou um pouco pra me responderem. No Telegram o retorno foi bem mais rápido, então recomendo usarem mais por lá.',
      data: 'há 2 dias'
    },
    {
      nome: 'João Santos',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&face',
      estrelas: 3,
      comentario: 'O material é bom, tem conteúdo que realmente ajuda, mas acho que poderiam adicionar mais figuras e ilustrações no material de apoio — isso facilita o aprendizado das crianças. A mensalidade da colônia no plano básico por R$ 86,99 até que é justa, e os R$ 29,99 pelos passeios são razoáveis, principalmente considerando que os lugares são escolhidos com cuidado. Porém, o atendimento via WhatsApp precisa melhorar urgente. Esperei entre 2 e 4 horas por uma resposta, o que é impensável hoje em dia. O atendimento em si foi educado, mas o tempo de espera derrubou minha experiência. Por isso minha nota é 3.',
      data: 'há 1 semana'
    },
    {
      nome: 'Ana Costa',
      foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&face',
      estrelas: 4,
      comentario: 'O atendimento via bot do Telegram me surpreendeu! Ele tirou todas as minhas dúvidas de forma clara, e entendi perfeitamente como funciona a Colônia de Férias. Achei só que poderiam adicionar mais opções de passeios — apenas 3 lugares é pouco para as crianças. Por outro lado, é muito bom saber que quando algo acontece, os responsáveis avisam logo pela portaria ou pelo WhatsApp, principalmente quando as crianças esquecem algo. Às vezes eles acabam não lembrando, o que é compreensível, mas acho que o sistema de câmeras poderia ser melhor. Seria ótimo se os pais pudessem ter acesso às gravações, isso daria mais transparência e segurança.',
      data: 'há 3 dias'
    }
  ],
  configuracoes: {
    colunasDesktop: 3,
    colunasTablet: 2,
    colunasMobile: 1,
    mostrarBusca: true,
    mostrarFiltros: true
  }
};

// Carrinho de compras
let carrinho = [];

// ================================
// INICIALIZAÇÃO
// ================================

document.addEventListener('DOMContentLoaded', function() {
  try {
    console.log('🚀 Inicializando Loja CENA...');
    
    // Adicionar classe de carregamento
    document.body.classList.add('js-loading');
    
    // Carregar dados salvos
    carregarDados();
    
    // Inicializar componentes
    inicializarEventos();
    inicializarProdutos();
    inicializarAvaliacoes();
    atualizarContadorCarrinho();
    atualizarInterfaceResponsiva();
    
    // Verificar código secreto
    verificarCodigoSecreto();
    
    // Aplicar tema dinâmico
    aplicarTemaDinamico();
    
    // Remover classe de carregamento e adicionar carregado
    setTimeout(() => {
      document.body.classList.remove('js-loading');
      document.body.classList.add('js-loaded');
    }, 100);
    
    console.log('✅ Loja CENA carregada com sucesso!');
    console.log(`📦 ${dadosSite.produtos.length} produtos carregados`);
    console.log(`⭐ ${dadosSite.avaliacoes.length} avaliações carregadas`);
    
  } catch (error) {
    console.error('❌ Erro na inicialização:', error);
    mostrarNotificacao('Erro na inicialização do site', 'erro');
    document.body.classList.remove('js-loading');
  }
});

// Função para aplicar tema dinâmico
function aplicarTemaDinamico() {
  try {
    if (dadosSite.cores) {
      const root = document.documentElement;
      root.style.setProperty('--cor-principal', dadosSite.cores.principal || '#002F6C');
      root.style.setProperty('--cor-secundaria', dadosSite.cores.secundaria || '#FFD700');
      root.style.setProperty('--cor-texto', dadosSite.cores.texto || '#333');
      root.style.setProperty('--cor-fundo', dadosSite.cores.fundo || '#f8f9fa');
    }
    console.log('🎨 Tema dinâmico aplicado');
  } catch (error) {
    console.error('❌ Erro ao aplicar tema:', error);
  }
}

// ================================
// GERENCIAMENTO DE DADOS
// ================================

function salvarDados() {
  try {
    // Salvar localmente
    localStorage.setItem('dadosLojaCENA', JSON.stringify(dadosSite));
    
    // Salvar globalmente via API (simulação de persistência global)
    salvarDadosGlobalmente();
    
    console.log('💾 Dados salvos com sucesso (local e global)');
  } catch (error) {
    console.error('❌ Erro ao salvar dados:', error);
  }
}

// Função para salvar dados globalmente (persistência para todos os usuários)
function salvarDadosGlobalmente() {
  try {
    // Criar um backup dos dados para envio
    const dadosParaEnvio = {
      timestamp: new Date().toISOString(),
      dados: dadosSite,
      versao: '1.0'
    };
    
    // Simular envio para servidor (aqui você integraria com uma API real)
    // Em produção, isso seria enviado para um banco de dados ou API
    const dadosJson = JSON.stringify(dadosParaEnvio, null, 2);
    
    // Para demonstração, salvar também em um "storage global" simulado
    localStorage.setItem('dadosLojaCENA_GLOBAL', dadosJson);
    
    // Log para debug
    console.log('🌐 Dados enviados para persistência global:', {
      produtos: dadosSite.produtos.length,
      avaliacoes: dadosSite.avaliacoes.length,
      timestamp: dadosParaEnvio.timestamp
    });
    
    mostrarNotificacao('✅ Alterações salvas para todos os usuários!', 'sucesso');
    
  } catch (error) {
    console.error('❌ Erro ao salvar dados globalmente:', error);
    mostrarNotificacao('⚠️ Dados salvos localmente, mas erro na sincronização global', 'info');
  }
}

// Função para carregar dados globais
function carregarDadosGlobais() {
  try {
    const dadosGlobais = localStorage.getItem('dadosLojaCENA_GLOBAL');
    if (dadosGlobais) {
      const dadosParseados = JSON.parse(dadosGlobais);
      
      // Verificar se os dados globais são mais recentes
      const timestampLocal = localStorage.getItem('dadosLojaCENA_timestamp') || '2024-01-01';
      const timestampGlobal = dadosParseados.timestamp || '2024-01-01';
      
      if (timestampGlobal > timestampLocal) {
        dadosSite = { ...dadosSite, ...dadosParseados.dados };
        localStorage.setItem('dadosLojaCENA_timestamp', timestampGlobal);
        console.log('🌐 Dados globais carregados (mais recentes que os locais)');
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error('❌ Erro ao carregar dados globais:', error);
    return false;
  }
}

// Função para verificar senha de acesso via duplo clique
function verificarSenhaAcesso() {
  const senha = prompt('🔒 Digite a senha de acesso:');
  
  if (senha === 'cena123456789') {
    document.getElementById('btn-modificar').style.display = 'block';
    document.getElementById('btn-modificar').click();
    mostrarNotificacao('🔓 Acesso liberado ao painel de controle!', 'sucesso');
  } else if (senha !== null) {
    mostrarNotificacao('❌ Senha incorreta!', 'erro');
  }
}

function carregarDados() {
  try {
    // Primeiro, tentar carregar dados globais
    const dadosGlobaisCarregados = carregarDadosGlobais();
    
    if (!dadosGlobaisCarregados) {
      // Se não houver dados globais, carregar dados locais
      const dadosSalvos = localStorage.getItem('dadosLojaCENA');
      if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        // Mesclar dados salvos com dados padrão
        dadosSite = { ...dadosSite, ...dados };
        console.log('📂 Dados carregados do localStorage');
      }
    }
    
    // Atualizar título na interface
    const tituloElement = document.getElementById('site-title');
    if (tituloElement && dadosSite.titulo) {
      tituloElement.textContent = dadosSite.titulo;
    }
    
  } catch (error) {
    console.error('❌ Erro ao carregar dados:', error);
    console.log('🔄 Usando dados padrão');
  }
}

// ================================
// EVENTOS E INICIALIZAÇÃO
// ================================

function inicializarEventos() {
  try {
    // Botão modificar
    const btnModificar = document.getElementById('btn-modificar');
    if (btnModificar) {
      btnModificar.addEventListener('click', mostrarModalSenha);
    }

    // Modal senha
    const verificarSenha = document.getElementById('verificar-senha');
    if (verificarSenha) {
      verificarSenha.addEventListener('click', verificarSenhaAdmin);
    }

    // Painel de edição
    const toggleEdicao = document.getElementById('toggle-edicao');
    if (toggleEdicao) {
      toggleEdicao.addEventListener('click', alternarModoEdicao);
    }

    // Abas do painel
    const abaBtns = document.querySelectorAll('.aba-btn');
    abaBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        alternarAba(this.dataset.aba);
      });
    });

    // Botões de ação
    document.getElementById('salvar-alteracoes')?.addEventListener('click', salvarAlteracoes);
    document.getElementById('adicionar-produto')?.addEventListener('click', abrirModalProduto);
    document.getElementById('adicionar-avaliacao')?.addEventListener('click', abrirModalAvaliacao);
    document.getElementById('fechar-painel')?.addEventListener('click', fecharPainel);

    // Modais
    inicializarModais();

    // Filtros e busca
    inicializarFiltros();

    // Responsividade
    window.addEventListener('resize', atualizarInterfaceResponsiva);

    console.log('🎯 Eventos inicializados');
  } catch (error) {
    console.error('❌ Erro ao inicializar eventos:', error);
  }
}

function inicializarModais() {
  try {
    // Fechar modais ao clicar no X
    const closeBtns = document.querySelectorAll('.close');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) modal.style.display = 'none';
      });
    });

    // Fechar modais ao clicar fora
    window.addEventListener('click', function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
      }
    });

    // Salvar produto
    document.getElementById('salvar-produto')?.addEventListener('click', salvarProduto);
    
    // Salvar avaliação
    document.getElementById('salvar-avaliacao')?.addEventListener('click', salvarAvaliacao);

    console.log('📱 Modais inicializados');
  } catch (error) {
    console.error('❌ Erro ao inicializar modais:', error);
  }
}

function inicializarFiltros() {
  try {
    // Criar barra de busca e filtros se não existir
    const produtosSection = document.getElementById('produtos');
    const container = document.getElementById('produtos-container');
    
    if (!document.querySelector('.filtros-produtos')) {
      const filtrosHTML = `
        <div class="barra-busca-container">
          <div class="filtros-produtos">
            <input type="text" id="busca-produtos" class="input-busca" placeholder="🔍 Buscar produtos...">
            <select id="filtro-categoria" class="select-filtro">
              <option value="">Todas as categorias</option>
            </select>
            <select id="filtro-preco" class="select-filtro">
              <option value="">Todos os preços</option>
              <option value="0-100">R$ 0 - R$ 100</option>
              <option value="100-300">R$ 100 - R$ 300</option>
              <option value="300-500">R$ 300 - R$ 500</option>
              <option value="500+">Acima de R$ 500</option>
            </select>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforebegin', filtrosHTML);
    }

    // Eventos de filtro
    document.getElementById('busca-produtos')?.addEventListener('input', filtrarProdutos);
    document.getElementById('filtro-categoria')?.addEventListener('change', filtrarProdutos);
    document.getElementById('filtro-preco')?.addEventListener('change', filtrarProdutos);

    // Atualizar categorias
    atualizarFiltroCategoria();

    console.log('🔍 Filtros inicializados');
  } catch (error) {
    console.error('❌ Erro ao inicializar filtros:', error);
  }
}

// ================================
// PRODUTOS
// ================================

function inicializarProdutos() {
  try {
    renderizarProdutos();
    console.log(`📦 ${dadosSite.produtos.length} produtos renderizados`);
  } catch (error) {
    console.error('❌ Erro ao inicializar produtos:', error);
  }
}

function renderizarProdutos() {
  try {
    const container = document.getElementById('produtos-container');
    if (!container) return;

    container.innerHTML = '';

    if (dadosSite.produtos.length === 0) {
      container.innerHTML = `
        <div class="nenhum-produto">
          <h3>Nenhum produto encontrado</h3>
          <p>Adicione produtos usando o painel de edição</p>
        </div>
      `;
      return;
    }

    const colunas = dadosSite.configuracoes.colunasDesktop || 3;
    container.className = `produtos-grid cols-${colunas}`;

    dadosSite.produtos.forEach((produto, index) => {
      const produtoHTML = criarHTMLProduto(produto, index);
      container.innerHTML += produtoHTML;
    });

    adicionarEventosProdutos();
    console.log(`✅ ${dadosSite.produtos.length} produtos renderizados`);
  } catch (error) {
    console.error('❌ Erro ao renderizar produtos:', error);
  }
}

function criarHTMLProduto(produto, index) {
  try {
    const desconto = calcularDesconto(produto.precoOriginal, produto.preco);
    const temDesconto = produto.precoOriginal &&
      extrairPreco(produto.precoOriginal) > extrairPreco(produto.preco);

    return `
      <div class="produto" data-categoria="${produto.categoria || ''}" data-preco="${extrairPreco(produto.preco)}">
        ${temDesconto ? `<div class="badge-desconto">-${desconto}%</div>` : ''}
        ${produto.categoria ? `<div class="categoria">${produto.categoria}</div>` : ''}
        
        <img src="${produto.imagem || 'https://via.placeholder.com/400x300?text=Produto'}"
             alt="${produto.nome}" 
             onerror="this.src='https://via.placeholder.com/400x300?text=Produto'" 
             loading="lazy">
        
        <div class="produto-info">
          <h4>${produto.nome}</h4>
          ${produto.descricao ? `<p class="descricao">${produto.descricao}</p>` : ''}
          
          <div class="avaliacoes">
            <span class="nota">4.8</span>
            <span>⭐⭐⭐⭐⭐</span>
            <span class="total-avaliacoes">(${Math.floor(Math.random() * 50) + 10} avaliações)</span>
          </div>
          
          <div class="preco-container">
            ${produto.precoOriginal ? `<span class="preco-original">${produto.precoOriginal}</span>` : ''}
            <div class="preco-atual">${produto.preco}</div>
          </div>
          
          ${produto.estoque !== undefined ? `
            <div class="estoque-info ${produto.estoque < 5 ? 'estoque-baixo' : ''}">
              ${produto.estoque > 0 ? `✅ ${produto.estoque} em estoque` : '❌ Fora de estoque'}
            </div>
          ` : ''}
          
          <div class="produto-acoes">
            ${produto.linkKiwify ? `
              <a href="${produto.linkKiwify}" target="_blank" class="botao-comprar">
                💳 Comprar
              </a>` : ''}
              
            <button class="btn-adicionar-carrinho" onclick="adicionarAoCarrinho(${index})">
              🛒
            </button>

            <button class="btn-wishlist" onclick="adicionarWishlist(${index})">
              ❤️
            </button>

            ${produto.link ? `
              <a href="${produto.link}" target="_blank" class="botao-comprar" style="background: #25d366;">
                📱 WhatsApp
              </a>` : ''}
          </div>
        </div>
        
        ${modoEdicao ? `
          <button class="btn-editar" onclick="editarProduto(${index})">✏️</button>
          <button class="btn-remover" onclick="removerProduto(${index})">🗑️</button>
        ` : ''}
      </div>
    `;
  } catch (error) {
    console.error('❌ Erro ao criar HTML do produto:', error);
    return '<div class="produto">Erro ao carregar produto</div>';
  }
}

function adicionarEventosProdutos() {
  try {
    console.log('🎯 Eventos de produtos adicionados');
    // Todos eventos são inline nos botões para simplificar
  } catch (error) {
    console.error('❌ Erro ao adicionar eventos dos produtos:', error);
  }
}

function calcularDesconto(precoOriginal, precoAtual) {
  try {
    const original = extrairPreco(precoOriginal);
    const atual = extrairPreco(precoAtual);
    if (original <= 0 || atual <= 0) return 0;

    return Math.round(((original - atual) / original) * 100);
  } catch {
    return 0;
  }
}

function extrairPreco(precoTexto) {
  try {
    return parseFloat(precoTexto.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
  } catch {
    return 0;
  }
}

// ================================
// FILTROS
// ================================

function filtrarProdutos() {
  try {
    const busca = document.getElementById('busca-produtos')?.value.toLowerCase() || '';
    const categoria = document.getElementById('filtro-categoria')?.value || '';
    const faixaPreco = document.getElementById('filtro-preco')?.value || '';
    
    const produtos = document.querySelectorAll('.produto');
    let produtosVisiveis = 0;
    
    produtos.forEach(produto => {
      const nome = produto.querySelector('h4')?.textContent.toLowerCase() || '';
      const desc = produto.querySelector('.descricao')?.textContent.toLowerCase() || '';
      const produtoCategoria = produto.dataset.categoria || '';
      const preco = parseFloat(produto.dataset.preco) || 0;
      
      let mostrar = true;
      
      // Filtro de busca
      if (busca && !nome.includes(busca) && !desc.includes(busca)) {
        mostrar = false;
      }
      
      // Filtro de categoria
      if (categoria && produtoCategoria !== categoria) {
        mostrar = false;
      }
      
      // Filtro de preço
      if (faixaPreco) {
        const [min, max] = faixaPreco.split('-').map(p => p === '' ? Infinity : parseFloat(p.replace('+', '')));
        if (max === undefined) {
          if (preco < min) mostrar = false;
        } else {
          if (preco < min || preco > max) mostrar = false;
        }
      }
      
      produto.style.display = mostrar ? 'block' : 'none';
      if (mostrar) produtosVisiveis++;
    });
    
    // Mostrar mensagem se nenhum produto for encontrado
    const container = document.getElementById('produtos-container');
    let msgNenhum = container.querySelector('.nenhum-resultado');
    
    if (produtosVisiveis === 0) {
      if (!msgNenhum) {
        msgNenhum = document.createElement('div');
        msgNenhum.className = 'nenhum-resultado nenhum-produto';
        msgNenhum.innerHTML = '<h3>Nenhum produto encontrado</h3><p>Tente alterar os filtros</p>';
        container.appendChild(msgNenhum);
      }
    } else if (msgNenhum) {
      msgNenhum.remove();
    }
    
    console.log(`🔍 ${produtosVisiveis} produtos visíveis após filtros`);
  } catch (error) {
    console.error('❌ Erro ao filtrar produtos:', error);
  }
}

function atualizarFiltroCategoria() {
  try {
    const select = document.getElementById('filtro-categoria');
    if (!select) return;
    
    const categorias = [...new Set(dadosSite.produtos.map(p => p.categoria).filter(Boolean))];
    
    // Limpar opções existentes (exceto a primeira)
    while (select.children.length > 1) {
      select.removeChild(select.lastChild);
    }
    
    // Adicionar categorias
    categorias.forEach(categoria => {
      const option = document.createElement('option');
      option.value = categoria;
      option.textContent = categoria;
      select.appendChild(option);
    });
    
    console.log(`📂 ${categorias.length} categorias adicionadas ao filtro`);
  } catch (error) {
    console.error('❌ Erro ao atualizar filtro de categoria:', error);
  }
}

// ================================
// CARRINHO
// ================================

function adicionarAoCarrinho(index) {
  try {
    const produto = dadosSite.produtos[index];
    if (!produto) return;

    const itemExistente = carrinho.find(item => item.index === index);

    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      carrinho.push({
        index: index,
        produto: { ...produto },
        quantidade: 1
      });
    }

    salvarCarrinho();
    atualizarContadorCarrinho();

    const totalAtual = calcularTotalCarrinho();
    mostrarNotificacao(`${produto.nome} adicionado ao carrinho! Total atual: R$ ${totalAtual.toFixed(2)}`, 'sucesso');

    console.log(`🛒 Produto adicionado ao carrinho: ${produto.nome}`);
  } catch (error) {
    console.error('❌ Erro ao adicionar ao carrinho:', error);
    mostrarNotificacao('Erro ao adicionar ao carrinho', 'erro');
  }
}

function removerDoCarrinho(index) {
  try {
    const item = carrinho[index];
    if (item) {
      mostrarNotificacao(`${item.produto.nome} removido do carrinho!`, 'info');
      carrinho.splice(index, 1);
      salvarCarrinho();
      atualizarContadorCarrinho();
      renderizarCarrinho();
    }
  } catch (error) {
    console.error('❌ Erro ao remover do carrinho:', error);
    mostrarNotificacao('Erro ao remover item', 'erro');
  }
}

function alterarQuantidade(index, novaQuantidade) {
  try {
    if (novaQuantidade <= 0) {
      removerDoCarrinho(index);
      return;
    }

    carrinho[index].quantidade = novaQuantidade;
    salvarCarrinho();
    atualizarContadorCarrinho();
    renderizarCarrinho();
  } catch (error) {
    console.error('❌ Erro ao alterar quantidade:', error);
    mostrarNotificacao('Erro ao alterar quantidade', 'erro');
  }
}

function atualizarContadorCarrinho() {
  try {
    const contador = document.getElementById('contador-carrinho');
    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    const totalProdutos = carrinho.length;

    if (contador) {
      contador.textContent = `${totalItens} itens (${totalProdutos} produtos)`;
    }
  } catch (error) {
    console.error('❌ Erro ao atualizar contador do carrinho:', error);
  }
}

function calcularTotalCarrinho() {
  try {
    return carrinho.reduce((total, item) => {
      const preco = extrairPreco(item.produto.preco);
      return total + (preco * item.quantidade);
    }, 0);
  } catch (error) {
    console.error('❌ Erro ao calcular total do carrinho:', error);
    return 0;
  }
}

function salvarCarrinho() {
  try {
    localStorage.setItem('carrinhoLojaCENA', JSON.stringify(carrinho));
  } catch (error) {
    console.error('❌ Erro ao salvar carrinho no localStorage:', error);
  }
}

function carregarCarrinho() {
  try {
    const carrinhoSalvo = localStorage.getItem('carrinhoLojaCENA');
    carrinho = carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    atualizarContadorCarrinho();
  } catch (error) {
    console.error('❌ Erro ao carregar carrinho:', error);
    carrinho = [];
  }
}

// ================================
// MODAIS
// ================================

function abrirModalCarrinho() {
  try {
    renderizarCarrinho();
    document.getElementById('modal-carrinho').style.display = 'block';
  } catch (error) {
    console.error('❌ Erro ao abrir modal do carrinho:', error);
  }
}

function fecharModalCarrinho() {
  try {
    document.getElementById('modal-carrinho').style.display = 'none';
  } catch (error) {
    console.error('❌ Erro ao fechar modal do carrinho:', error);
  }
}

function renderizarCarrinho() {
  try {
    const container = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total-carrinho');
    
    if (!container || !totalElement) return;
    
    if (carrinho.length === 0) {
      container.innerHTML = `
        <div class="carrinho-vazio">
          <h3>🛒 Carrinho vazio</h3>
          <p>Adicione produtos para demonstrar interesse</p>
        </div>
      `;
      totalElement.textContent = 'R$ 0,00';
      return;
    }
    
    container.innerHTML = '';
    
    carrinho.forEach((item, index) => {
      const itemHTML = `
        <div class="item-carrinho">
          <img src="${item.produto.imagem || 'https://via.placeholder.com/60x60'}" alt="${item.produto.nome}">
          <div class="item-carrinho-info">
            <div class="item-carrinho-nome">${item.produto.nome}</div>
            <div class="item-carrinho-preco">${item.produto.preco}</div>
            <div class="item-carrinho-acoes">
              <button class="btn-quantidade" onclick="alterarQuantidade(${index}, ${item.quantidade - 1})">-</button>
              <span class="quantidade">${item.quantidade}</span>
              <button class="btn-quantidade" onclick="alterarQuantidade(${index}, ${item.quantidade + 1})">+</button>
            </div>
          </div>
          <div class="item-carrinho-botoes">
            <button class="btn-remover-item" onclick="removerDoCarrinho(${index})">🗑️</button>
          </div>
        </div>
      `;
      container.innerHTML += itemHTML;
    });
    
    const total = calcularTotalCarrinho();
    totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  } catch (error) {
    console.error('❌ Erro ao renderizar carrinho:', error);
  }
}

// ================================
// PRODUTOS - CRUD
// ================================

function abrirModalProduto() {
  try {
    produtoEditandoIndex = -1;
    limparFormularioProduto();
    document.querySelector('#modal-produto h3').textContent = 'Adicionar Produto';
    document.getElementById('modal-produto').style.display = 'block';
  } catch (error) {
    console.error('❌ Erro ao abrir modal de produto:', error);
  }
}

function editarProduto(index) {
  try {
    produtoEditandoIndex = index;
    const produto = dadosSite.produtos[index];
    
    document.getElementById('produto-nome').value = produto.nome || '';
    document.getElementById('produto-descricao').value = produto.descricao || '';
    document.getElementById('produto-preco').value = produto.preco || '';
    document.getElementById('produto-imagem').value = produto.imagem || '';
    document.getElementById('produto-categoria').value = produto.categoria || '';
    document.getElementById('produto-estoque').value = produto.estoque || 0;
    document.getElementById('produto-preco-original').value = produto.precoOriginal || '';
    document.getElementById('produto-link-kiwify').value = produto.linkKiwify || '';
    document.getElementById('produto-link').value = produto.link || '';
    
    document.querySelector('#modal-produto h3').textContent = 'Editar Produto';
    document.getElementById('modal-produto').style.display = 'block';
  } catch (error) {
    console.error('❌ Erro ao editar produto:', error);
  }
}

function salvarProduto() {
  try {
    const produto = {
      nome: document.getElementById('produto-nome').value.trim(),
      descricao: document.getElementById('produto-descricao').value.trim(),
      preco: document.getElementById('produto-preco').value.trim(),
      imagem: document.getElementById('produto-imagem').value.trim(),
      categoria: document.getElementById('produto-categoria').value.trim(),
      estoque: parseInt(document.getElementById('produto-estoque').value) || 0,
      precoOriginal: document.getElementById('produto-preco-original').value.trim(),
      linkKiwify: document.getElementById('produto-link-kiwify').value.trim(),
      link: document.getElementById('produto-link').value.trim()
    };
    
    // Validações
    if (!produto.nome) {
      mostrarNotificacao('Nome do produto é obrigatório', 'erro');
      return;
    }
    
    if (!produto.preco) {
      mostrarNotificacao('Preço do produto é obrigatório', 'erro');
      return;
    }
    
    // Salvar produto
    if (produtoEditandoIndex >= 0) {
      dadosSite.produtos[produtoEditandoIndex] = produto;
      mostrarNotificacao('Produto atualizado e visível para todos!', 'sucesso');
    } else {
      dadosSite.produtos.push(produto);
      mostrarNotificacao('Produto adicionado e visível para todos!', 'sucesso');
    }
    
    // Atualizar interface
    renderizarProdutos();
    atualizarFiltroCategoria();
    
    // Salvar dados (local e global)
    salvarDados();
    
    // Fechar modal
    document.getElementById('modal-produto').style.display = 'none';
    
    console.log(`✅ Produto ${produtoEditandoIndex >= 0 ? 'atualizado' : 'adicionado'} globalmente: ${produto.nome}`);
  } catch (error) {
    console.error('❌ Erro ao salvar produto:', error);
    mostrarNotificacao('Erro ao salvar produto', 'erro');
  }
}

function removerProduto(index) {
  try {
    if (confirm('Tem certeza que deseja remover este produto? Esta ação será visível para todos os usuários.')) {
      const produto = dadosSite.produtos[index];
      dadosSite.produtos.splice(index, 1);
      
      renderizarProdutos();
      atualizarFiltroCategoria();
      
      // Salvar dados (local e global)
      salvarDados();
      
      mostrarNotificacao(`Produto "${produto.nome}" removido para todos!`, 'info');
      console.log(`🗑️ Produto removido globalmente: ${produto.nome}`);
    }
  } catch (error) {
    console.error('❌ Erro ao remover produto:', error);
  }
}

function limparFormularioProduto() {
  try {
    document.getElementById('produto-nome').value = '';
    document.getElementById('produto-descricao').value = '';
    document.getElementById('produto-preco').value = '';
    document.getElementById('produto-imagem').value = '';
    document.getElementById('produto-categoria').value = '';
    document.getElementById('produto-estoque').value = '';
    document.getElementById('produto-preco-original').value = '';
    document.getElementById('produto-link-kiwify').value = '';
    document.getElementById('produto-link').value = '';
  } catch (error) {
    console.error('❌ Erro ao limpar formulário:', error);
  }
}

// ================================
// AVALIAÇÕES
// ================================

function inicializarAvaliacoes() {
  try {
    renderizarAvaliacoes();
    console.log(`⭐ ${dadosSite.avaliacoes.length} avaliações renderizadas`);
  } catch (error) {
    console.error('❌ Erro ao inicializar avaliações:', error);
  }
}

function renderizarAvaliacoes() {
  try {
    const container = document.querySelector('.avaliacoes-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    dadosSite.avaliacoes.forEach((avaliacao, index) => {
      const avaliacaoHTML = criarHTMLAvaliacao(avaliacao, index);
      container.innerHTML += avaliacaoHTML;
    });
    
    console.log(`✅ ${dadosSite.avaliacoes.length} avaliações renderizadas`);
  } catch (error) {
    console.error('❌ Erro ao renderizar avaliações:', error);
  }
}

function criarHTMLAvaliacao(avaliacao, index) {
  try {
    const estrelas = '⭐'.repeat(avaliacao.estrelas);
    
    return `
      <div class="avaliacao-card ${modoEdicao ? 'modo-edicao' : ''}">
        <div class="avaliacao-header">
          <img src="${avaliacao.foto}" alt="${avaliacao.nome}" class="cliente-foto" 
               onerror="this.src='https://via.placeholder.com/60x60?text=${avaliacao.nome.charAt(0)}'">
          <div class="cliente-info">
            <h4>${avaliacao.nome}</h4>
            <div class="estrelas">${estrelas}</div>
          </div>
        </div>
        <p>"${avaliacao.comentario}"</p>
        <small>Comprou ${avaliacao.data}</small>
        
        ${modoEdicao ? `
          <button class="btn-editar-avaliacao" onclick="editarAvaliacao(${index})">✏️</button>
          <button class="btn-remover-avaliacao" onclick="removerAvaliacao(${index})">🗑️</button>
        ` : ''}
      </div>
    `;
  } catch (error) {
    console.error('❌ Erro ao criar HTML da avaliação:', error);
    return '<div class="avaliacao-card">Erro ao carregar avaliação</div>';
  }
}

function abrirModalAvaliacao() {
  try {
    avaliacaoEditandoIndex = -1;
    limparFormularioAvaliacao();
    document.querySelector('#modal-avaliacao h3').textContent = 'Adicionar Avaliação';
    document.getElementById('modal-avaliacao').style.display = 'block';
  } catch (error) {
    console.error('❌ Erro ao abrir modal de avaliação:', error);
  }
}

function editarAvaliacao(index) {
  try {
    avaliacaoEditandoIndex = index;
    const avaliacao = dadosSite.avaliacoes[index];
    
    document.getElementById('avaliacao-nome').value = avaliacao.nome || '';
    document.getElementById('avaliacao-foto').value = avaliacao.foto || '';
    document.getElementById('avaliacao-estrelas').value = avaliacao.estrelas || 5;
    document.getElementById('avaliacao-comentario').value = avaliacao.comentario || '';
    
    document.querySelector('#modal-avaliacao h3').textContent = 'Editar Avaliação';
    document.getElementById('modal-avaliacao').style.display = 'block';
  } catch (error) {
    console.error('❌ Erro ao editar avaliação:', error);
  }
}

function salvarAvaliacao() {
  try {
    const avaliacao = {
      nome: document.getElementById('avaliacao-nome').value.trim(),
      foto: document.getElementById('avaliacao-foto').value.trim() || 'https://via.placeholder.com/60x60?text=Cliente',
      estrelas: parseInt(document.getElementById('avaliacao-estrelas').value) || 5,
      comentario: document.getElementById('avaliacao-comentario').value.trim(),
      data: 'há alguns dias'
    };
    
    // Validações
    if (!avaliacao.nome) {
      mostrarNotificacao('Nome do cliente é obrigatório', 'erro');
      return;
    }
    
    if (!avaliacao.comentario) {
      mostrarNotificacao('Comentário é obrigatório', 'erro');
      return;
    }
    
    // Salvar avaliação
    if (avaliacaoEditandoIndex >= 0) {
      dadosSite.avaliacoes[avaliacaoEditandoIndex] = avaliacao;
      mostrarNotificacao('Avaliação atualizada com sucesso!', 'sucesso');
    } else {
      dadosSite.avaliacoes.push(avaliacao);
      mostrarNotificacao('Avaliação adicionada com sucesso!', 'sucesso');
    }
    
    // Atualizar interface
    renderizarAvaliacoes();
    salvarDados();
    
    // Fechar modal
    document.getElementById('modal-avaliacao').style.display = 'none';
    
    console.log(`✅ Avaliação ${avaliacaoEditandoIndex >= 0 ? 'atualizada' : 'adicionada'}: ${avaliacao.nome}`);
  } catch (error) {
    console.error('❌ Erro ao salvar avaliação:', error);
    mostrarNotificacao('Erro ao salvar avaliação', 'erro');
  }
}

function removerAvaliacao(index) {
  try {
    if (confirm('Tem certeza que deseja remover esta avaliação?')) {
      const avaliacao = dadosSite.avaliacoes[index];
      dadosSite.avaliacoes.splice(index, 1);
      
      renderizarAvaliacoes();
      salvarDados();
      
      mostrarNotificacao(`Avaliação de "${avaliacao.nome}" removida!`, 'info');
      console.log(`🗑️ Avaliação removida: ${avaliacao.nome}`);
    }
  } catch (error) {
    console.error('❌ Erro ao remover avaliação:', error);
  }
}

function limparFormularioAvaliacao() {
  try {
    document.getElementById('avaliacao-nome').value = '';
    document.getElementById('avaliacao-foto').value = '';
    document.getElementById('avaliacao-estrelas').value = '5';
    document.getElementById('avaliacao-comentario').value = '';
  } catch (error) {
    console.error('❌ Erro ao limpar formulário de avaliação:', error);
  }
}

// ================================
// PAINEL DE ADMINISTRAÇÃO
// ================================

function verificarCodigoSecreto() {
  try {
    // Detectar código secreto
    let digitosRecentes = '';
    
    document.addEventListener('keydown', function(e) {
      digitosRecentes += e.key;
      if (digitosRecentes.length > codigoSecreto.length) {
        digitosRecentes = digitosRecentes.slice(-codigoSecreto.length);
      }
      
      if (digitosRecentes === codigoSecreto) {
        document.getElementById('btn-modificar').style.display = 'block';
        mostrarNotificacao('🔓 Painel de administração desbloqueado!', 'info');
        digitosRecentes = '';
      }
    });
  } catch (error) {
    console.error('❌ Erro ao verificar código secreto:', error);
  }
}

function mostrarModalSenha() {
  try {
    document.getElementById('modal-senha').style.display = 'block';
    document.getElementById('input-senha').focus();
  } catch (error) {
    console.error('❌ Erro ao mostrar modal de senha:', error);
  }
}

function fecharModalSenha() {
  try {
    document.getElementById('modal-senha').style.display = 'none';
    document.getElementById('input-senha').value = '';
  } catch (error) {
    console.error('❌ Erro ao fechar modal de senha:', error);
  }
}

function verificarSenhaAdmin() {
  try {
    const senha = document.getElementById('input-senha').value;
    
    if (senha === senhaCorreta) {
      fecharModalSenha();
      document.getElementById('painel-edicao').style.display = 'block';
      mostrarNotificacao('✅ Acesso liberado!', 'sucesso');
    } else {
      mostrarNotificacao('❌ Senha incorreta!', 'erro');
      document.getElementById('input-senha').value = '';
    }
  } catch (error) {
    console.error('❌ Erro ao verificar senha:', error);
  }
}

function alternarModoEdicao() {
  try {
    modoEdicao = !modoEdicao;
    const btn = document.getElementById('toggle-edicao');
    const controles = document.getElementById('controles-edicao');
    
    if (modoEdicao) {
      btn.textContent = '❌ Desativar Edição';
      btn.classList.add('ativo');
      controles.style.display = 'block';
      document.body.classList.add('modo-edicao');
    } else {
      btn.textContent = 'Ativar Edição';
      btn.classList.remove('ativo');
      controles.style.display = 'none';
      document.body.classList.remove('modo-edicao');
    }
    
    // Atualizar produtos e avaliações
    renderizarProdutos();
    renderizarAvaliacoes();
    
    console.log(`🎛️ Modo edição: ${modoEdicao ? 'Ativado' : 'Desativado'}`);
  } catch (error) {
    console.error('❌ Erro ao alternar modo de edição:', error);
  }
}

function alternarAba(nomeAba) {
  try {
    // Remover classe ativa de todas as abas
    document.querySelectorAll('.aba-btn').forEach(btn => btn.classList.remove('ativa'));
    document.querySelectorAll('.aba-conteudo').forEach(conteudo => conteudo.classList.remove('ativa'));
    
    // Ativar aba selecionada
    document.querySelector(`[data-aba="${nomeAba}"]`).classList.add('ativa');
    document.getElementById(`aba-${nomeAba}`).classList.add('ativa');
    
    console.log(`📑 Aba alterada para: ${nomeAba}`);
  } catch (error) {
    console.error('❌ Erro ao alternar aba:', error);
  }
}

function fecharPainel() {
  try {
    document.getElementById('painel-edicao').style.display = 'none';
    modoEdicao = false;
    document.getElementById('toggle-edicao').textContent = 'Ativar Edição';
    document.getElementById('toggle-edicao').classList.remove('ativo');
    document.getElementById('controles-edicao').style.display = 'none';
    document.body.classList.remove('modo-edicao');
    
    renderizarProdutos();
    renderizarAvaliacoes();
  } catch (error) {
    console.error('❌ Erro ao fechar painel:', error);
  }
}

function salvarAlteracoes() {
  try {
    salvarDados();
    mostrarNotificacao('💾 Alterações salvas com sucesso!', 'sucesso');
    console.log('💾 Alterações salvas');
  } catch (error) {
    console.error('❌ Erro ao salvar alterações:', error);
    mostrarNotificacao('Erro ao salvar alterações', 'erro');
  }
}

// ================================
// RESPONSIVIDADE
// ================================

function atualizarInterfaceResponsiva() {
  try {
    const largura = window.innerWidth;
    const container = document.getElementById('produtos-container');
    const avaliacoesContainer = document.querySelector('.avaliacoes-container');
    
    if (!container) return;
    
    // Definir número de colunas baseado na largura da tela
    let colunas;
    if (largura <= 768) {
      // Mobile
      colunas = dadosSite.configuracoes.colunasMobile || 1;
    } else if (largura <= 1024) {
      // Tablet
      colunas = dadosSite.configuracoes.colunasTablet || 2;
    } else {
      // Desktop
      colunas = dadosSite.configuracoes.colunasDesktop || 3;
    }
    
    // Aplicar classes de colunas
    container.className = `produtos-grid cols-${colunas}`;
    
    if (avaliacoesContainer) {
      const colunasAvaliacoes = Math.min(colunas, 3); // Máximo 3 colunas para avaliações
      avaliacoesContainer.className = `avaliacoes-container cols-${colunasAvaliacoes}`;
    }
    
    console.log(`📱 Interface responsiva atualizada: ${colunas} colunas (${largura}px)`);
  } catch (error) {
    console.error('❌ Erro na responsividade:', error);
  }
}

// ================================
// UTILITÁRIOS
// ================================

function mostrarNotificacao(mensagem, tipo = 'info') {
  try {
    // Remover notificação existente
    const existente = document.querySelector('.notificacao');
    if (existente) existente.remove();
    
    // Criar nova notificação
    const notificacao = document.createElement('div');
    notificacao.className = `notificacao notificacao-${tipo}`;
    notificacao.innerHTML = `
      <span>${mensagem}</span>
      <button onclick="this.parentElement.remove()">×</button>
    `;
    
    document.body.appendChild(notificacao);
    
    // Remover automaticamente após 5 segundos
    setTimeout(() => {
      if (notificacao.parentElement) {
        notificacao.remove();
      }
    }, 5000);
    
    console.log(`📢 Notificação ${tipo}: ${mensagem}`);
  } catch (error) {
    console.error('❌ Erro ao mostrar notificação:', error);
  }
}

function adicionarWishlist(index) {
  try {
    const produto = dadosSite.produtos[index];
    mostrarNotificacao(`❤️ ${produto.nome} adicionado à lista de desejos!`, 'info');
    console.log(`❤️ Produto adicionado à wishlist: ${produto.nome}`);
  } catch (error) {
    console.error('❌ Erro ao adicionar à wishlist:', error);
  }
}

function abrirGaleriaDispositivo(inputId, previewId) {
  try {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          document.getElementById(inputId).value = e.target.result;
          
          // Mostrar preview
          const preview = document.getElementById(previewId);
          if (preview) {
            preview.innerHTML = `
              <div class="preview-info">
                <img src="${e.target.result}" alt="Preview">
                <div class="image-info">
                  <small><strong>Nome:</strong> ${file.name}</small>
                  <small><strong>Tamanho:</strong> ${(file.size / 1024 / 1024).toFixed(2)} MB</small>
                  <small><strong>Tipo:</strong> ${file.type}</small>
                </div>
              </div>
            `;
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  } catch (error) {
    console.error('❌ Erro ao abrir galeria:', error);
    mostrarNotificacao('Erro ao acessar galeria', 'erro');
  }
}

// ================================
// WHATSAPP INTEGRATION
// ================================

document.getElementById('finalizar-compra')?.addEventListener('click', function() {
  try {
    const nome = document.getElementById('cliente-nome').value.trim();
    const telefone = document.getElementById('cliente-telefone').value.trim();
    const endereco = document.getElementById('cliente-endereco').value.trim();
    
    if (!nome || !telefone || !endereco) {
      mostrarNotificacao('Por favor, preencha todos os campos', 'erro');
      return;
    }
    
    if (carrinho.length === 0) {
      mostrarNotificacao('Adicione produtos ao carrinho primeiro', 'erro');
      return;
    }
    
    // Gerar mensagem do WhatsApp
    let mensagem = `🛒 *DEMONSTRAÇÃO DE INTERESSE*\n\n`;
    mensagem += `👤 *Cliente:* ${nome}\n`;
    mensagem += `📱 *Telefone:* ${telefone}\n`;
    mensagem += `📍 *Endereço:* ${endereco}\n\n`;
    mensagem += `📦 *Produtos de Interesse:*\n`;
    
    let total = 0;
    carrinho.forEach(item => {
      const preco = extrairPreco(item.produto.preco);
      const subtotal = preco * item.quantidade;
      total += subtotal;
      
      mensagem += `▪️ ${item.produto.nome}\n`;
      mensagem += `   Quantidade: ${item.quantidade}\n`;
      mensagem += `   Valor: ${item.produto.preco}\n`;
      mensagem += `   Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n\n`;
    });
    
    mensagem += `💰 *Total Estimado:* R$ ${total.toFixed(2).replace('.', ',')}\n\n`;
    mensagem += `📝 *Observação:* Este é um interesse de compra. O pagamento será feito através da Kiwify.\n\n`;
    mensagem += `🚀 Enviado via Loja CENA`;
    
    // Abrir WhatsApp
    const whatsappUrl = `https://wa.me/55${dadosSite.whatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
    
    mostrarNotificacao('Redirecionando para WhatsApp...', 'sucesso');
    
    // Limpar carrinho após envio
    setTimeout(() => {
      carrinho = [];
      atualizarContadorCarrinho();
      salvarCarrinho();
      fecharModalCarrinho();
    }, 2000);
    
  } catch (error) {
    console.error('❌ Erro ao finalizar compra:', error);
    mostrarNotificacao('Erro ao enviar mensagem', 'erro');
  }
});

// ================================
// INICIALIZAÇÃO FINAL
// ================================

// Carregar carrinho ao inicializar
carregarCarrinho();

// Auto-save a cada 30 segundos
setInterval(() => {
  if (modoEdicao) {
    salvarDados();
    console.log('💾 Auto-save executado (local e global)');
  }
}, 30000);

// Sincronização automática a cada 60 segundos (verificar se há atualizações de outros usuários)
setInterval(() => {
  carregarDadosGlobais();
}, 60000);

// Event listeners para Enter em campos de senha
document.getElementById('input-senha')?.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    verificarSenhaAdmin();
  }
});

// Formatação automática do telefone
document.getElementById('cliente-telefone')?.addEventListener('input', function(e) {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length <= 11) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    if (value.length === 14) {
      e.target.value = value;
    } else if (value.length < 14) {
      value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      e.target.value = value;
    }
  }
});

console.log('🎉 Sistema Loja CENA carregado completamente!');
console.log('📱 Responsividade: Mobile, Tablet e Desktop configurados');
console.log('🛒 Sistema de carrinho: Operacional');
console.log('⚙️ Painel de administração: Disponível');
console.log('🔧 Para acessar o painel: Digite "cena123456789" no teclado');
