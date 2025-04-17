// Variáveis globais
let questions = [
    {
        text: "Você está desenvolvendo uma solução para um serviço de entrega móvel. Você está desenvolvendo um aplicativo móvel que os usuários podem usar para fazer pedidos de um restaurante em sua área. O aplicativo usa o seguinte fluxo de trabalho: 1. Um motorista seleciona os restaurantes para os quais fará entregas. 2. Os pedidos são enviados para todos os motoristas disponíveis em uma área. 3. Apenas pedidos dos restaurantes selecionados aparecerão para o motorista. 4. O primeiro motorista a aceitar um pedido o remove da lista de pedidos disponíveis. Você precisa implementar uma solução Azure Service Bus. Quais três ações você deve realizar em sequência?",
        options: [
            { text: "Caixa 1: Criar um único tópico do Service Bus. Caixa 2: Criar um Namespace do Service Bus para cada restaurante para o qual um motorista pode receber mensagens. Caixa 3: Criar uma assinatura do Service Bus para cada restaurante para o qual um motorista pode receber pedidos.", isCorrect: true },
            { text: "Caixa 1: Criar uma assinatura do Service Bus para cada restaurante para o qual um motorista pode receber pedidos. Caixa 2: Criar um tópico do Service Bus para cada restaurante. Caixa 3: Criar um Namespace do Service Bus para cada um.", isCorrect: false },
            { text: "Caixa 1: Criar um único tópico do Service Bus. Caixa 2: Criar uma assinatura do Service Bus para cada restaurante para o qual um motorista pode receber pedidos. Caixa 3: Criar um único tópico do Service Bus.", isCorrect: false },
            { text: "Caixa 1: Criar um único tópico do Service Bus. Caixa 2: Criar um Namespace do Service Bus para cada restaurante para o qual um motorista pode receber mensagens. Caixa 3: Criar um Namespace do Service Bus para cada um.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo de notícias e conteúdo de blog para dispositivos Windows. Uma notificação deve chegar ao dispositivo do usuário quando houver um novo artigo disponível para visualização. Você precisa implementar notificações push. Como você deve completar o segmento de código?",
        options: [
            { text: "Caixa 1: `NotificationHubClient`. Caixa 2: `NotificationHubClient`. Caixa 3: `CreateClientFromConnectionString`. Caixa 4: `SendWindowsNativeNotificationAsync`.", isCorrect: true },
            { text: "Caixa 1: `NotificationHubJob`. Caixa 2: `NotificationHubJob`. Caixa 3: `PatchInstallation`. Caixa 4: `SendWindowsNativeNotificationAsync`.", isCorrect: false },
            { text: "Caixa 1: `NotificationHubClientSettings`. Caixa 2: `NotificationHubClientSettings`. Caixa 3: `CreateOrUpdatelnstallation`. Caixa 4: `ScheduleNotificationAsync`.", isCorrect: false },
            { text: "Caixa 1: `NotificationHubClientSettings`. Caixa 2: `NotificationDetails`. Caixa 3: `CreateOrUpdatelnstallation`. Caixa 4: `SendWindowsNativeNotificationAsync`.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo uma solução de mensageria do Azure. Você precisa garantir que a solução atenda aos seguintes requisitos: Fornecer suporte transacional. Fornecer detecção de duplicatas. Armazenar as mensagens por um período ilimitado de tempo. Quais duas tecnologias atenderão aos requisitos?",
        options: [
            { text: "Tópico do Azure Service Bus.", isCorrect: true },
            { text: "Fila do Azure Service Bus.", isCorrect: true },
            { text: "Fila do Azure Storage.", isCorrect: false },
            { text: "Azure Event Hub.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo uma solução de gateway para uma API de notícias voltada para o público. O back-end da API de notícias é implementado como um serviço RESTful e hospedado em uma instância do Azure App Service. Você precisa configurar a autenticação de back-end para a instância do serviço de Gerenciamento de API. Qual tipo de destino e credencial de gateway você deve usar?",
        options: [
            { text: "Destino: Recurso do Azure. Credenciais de gateway: Certificado de cliente.", isCorrect: false },
            { text: "Destino: Certificado de cliente. Credenciais de gateway: Básico.", isCorrect: false },
            { text: "Destino: Recurso do Azure. Credenciais de gateway: Básico.", isCorrect: false },
            { text: "Destino: Endpoint HTTP(s). Credenciais de gateway: Certificado de cliente.", isCorrect: true }
        ]
    },
    {
        text: "Você está criando um aplicativo que usa o Event Grid para se conectar com outros serviços. Os dados de eventos do seu aplicativo serão enviados para uma função serverless que verifica a conformidade. Esta função é mantida pela sua empresa. Você escreve uma nova assinatura de evento no escopo do seu recurso. O evento deve ser invalidado após um período específico de tempo. Você precisa configurar o Event Grid. O que você deve fazer?",
        options: [
            { text: "Entrega de WebHook: Tokens SAS. Publicação de tópico: Handshake ValidationCode.", isCorrect: true },
            { text: "Entrega de WebHook: Autenticação por chave. Publicação de tópico: Handshake ValidationCode.", isCorrect: false },
            { text: "Entrega de WebHook: Controle de Acesso de Gerenciamento. Publicação de tópico: Handshake ValidationURL.", isCorrect: false },
            { text: "Entrega de WebHook: Tokens SAS. Publicação de tópico: Handshake ValidationURL.", isCorrect: false }
        ]
    },
    {
        text: "Você está trabalhando para a Contoso, Ltd. Você define um objeto de Política de API usando a seguinte marcação XML. Questão 1: O segmento XML pertence à seção `<inbound>` da política.",
        options: [
            { text: "Sim.", isCorrect: true },
            { text: "Não.", isCorrect: false }
        ]
    },
    {
        text: "Você está trabalhando para a Contoso, Ltd. Você define um objeto de Política de API usando a seguinte marcação XML. Questão 2: Se o tamanho do corpo for >256k, ocorrerá um erro.",
        options: [
            { text: "Sim.", isCorrect: false },
            { text: "Não.", isCorrect: true }
        ]
    },
    {
        text: "Você está trabalhando para a Contoso, Ltd. Você define um objeto de Política de API usando a seguinte marcação XML. Questão 3: Se a requisição for `<http://contoso.com/api/9.2/>`, a política manterá a versão mais alta.",
        options: [
            { text: "Sim.", isCorrect: false },
            { text: "Não.", isCorrect: true }
        ]
    },
    {
        text: "Você está desenvolvendo uma solução de gateway para uma API de notícias voltada para o público. O back-end da API de notícias é implementado como um serviço RESTful e usa uma especificação OpenAPI. Você precisa garantir que possa acessar a API de notícias usando uma instância do serviço de Gerenciamento de API do Azure. Qual comando do Azure PowerShell você deve executar?",
        options: [
            { text: "`Import-AzureRmApiManagementApi -Context $ApiMgmtContext -SpecificationFormat 'Swagger' -SpecificationPath $SwaggerPath -Path $Path`.", isCorrect: true },
            { text: "`New-AzureRmApiManagementBackend -Context $ApiMgmtContext-Url $Url -Protocol http`.", isCorrect: false },
            { text: "`New-AzureRmApiManagement -ResourceGroupName $ResourceGroup -Name $Name 'Location $Location -Organization $Org -AdminEmail $AdminEmail`.", isCorrect: false },
            { text: "`New-AzureRmApiManagementBackendProxy -Url $ApiUrl`.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo uma função do Azure que se conecta a uma instância do Azure SQL Database. A função é acionada por uma fila do Azure Storage. Você recebe relatórios de várias System.InvalidOperationExceptions com a seguinte mensagem: 'Tempo limite expirado. O período de tempo limite decorreu antes de obter uma conexão do pool. Isso pode ter ocorrido porque todas as conexões em pool estavam em uso e o tamanho máximo do pool foi atingido.' Você precisa evitar a exceção. O que você deve fazer?",
        options: [
            { text: "No arquivo `host.json`, diminuir o valor da opção batchSize.", isCorrect: false },
            { text: "Converter o gatilho para Azure Event Hub.", isCorrect: false },
            { text: "Converter a Função do Azure para o plano Premium.", isCorrect: true },
            { text: "No arquivo `function.json`, alterar o valor da opção type para queueScaling.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um serviço web REST. Os clientes acessarão o serviço usando uma instância do Azure API Management. O serviço web não lida corretamente com conflitos. Em vez de retornar um código de status HTTP 409, o serviço retorna um código de status 500. O corpo da mensagem de status contém apenas a palavra conflito. Você precisa garantir que os conflitos produzam a resposta correta. Como você deve completar a política?",
        options: [
            { text: "Caixa 1: `on-error`. Caixa 2: `context`. Caixa 3: `context`. Caixa 4: `set-status`. Caixa 5: `on-error`.", isCorrect: true },
            { text: "Caixa 1: `when-error`. Caixa 2: `context`. Caixa 3: `server`. Caixa 4: `override-status`. Caixa 5:`on-error`.", isCorrect: false },
            { text: "Caixa 1: `when-error`. Caixa 2: `context`. Caixa 3: `context`. Caixa 4: `set-status`. Caixa 5:`on-error`.", isCorrect: false },
            { text: "Caixa 1: `on-error`. Caixa 2: `context`. Caixa 3: `server`. Caixa 4: `override-status`. Caixa 5:`on-error`.", isCorrect: false }
        ]
    },
    {
        text: "Você é um desenvolvedor para uma empresa de Software como Serviço (SaaS). Você desenvolve soluções que fornecem a capacidade de enviar notificações usando Azure Notification Hubs. Você precisa criar um código de exemplo que os clientes possam usar como referência para como enviar notificações brutas para dispositivos Windows Push Notification Services (WNS). O código de exemplo não deve usar pacotes externos. Como você deve completar o segmento de código?",
        options: [
            { text: "Caixa 1: `windows`. Caixa 2: `application/octet-stream`.", isCorrect: true },
            { text: "Caixa 1: `windowsphone`. Caixa 2: `raw`.", isCorrect: false },
            { text: "Caixa 1: `windows`. Caixa 2: `application/json`.", isCorrect: false },
            { text: "Caixa 1: `windowsphone`. Caixa 2: `application/xml`.", isCorrect: false }
        ]
    },
    {
        text: "Você desenvolve e implanta um aplicativo web ASP.NET no Azure App Service. Você usa telemetria do Application Insights para monitorar o aplicativo. Você deve testar o aplicativo para garantir que ele esteja disponível e responsivo de vários pontos ao redor do mundo e em intervalos regulares. Se o aplicativo não estiver respondendo, você deve enviar um alerta para a equipe de suporte. Você precisa configurar um teste para o aplicativo web. Quais dois tipos de teste você pode usar?",
        options: [
            { text: "Integração.", isCorrect: false },
            { text: "TrackAvailablity.", isCorrect: true },
            { text: "URL ping.", isCorrect: true },
            { text: "Unitário.", isCorrect: false },
            { text: "Carga.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo uma solução do Azure para coletar dados de inventário de milhares de lojas localizadas em todo o mundo. Cada local de loja enviará os dados de inventário por hora para uma conta de armazenamento do Azure Blob para processamento. A solução deve atender aos seguintes requisitos: Iniciar o processamento quando os dados forem salvos no Azure Blob storage. Filtrar dados com base nas informações de localização da loja. Acionar um Azure Logic App para processar os dados para saída no Azure Cosmos DB. Habilitar alta disponibilidade e distribuição geográfica. Permitir 24 horas para novas tentativas. Implementar um processamento de dados com retirada exponencial. Você precisa configurar a solução. O que você deve implementar?",
        options: [
            { text: "Fonte de Evento: Azure Event Grid. Receptor de Evento: Azure Logic App. Manipulador de Evento: Azure Service Bus.", isCorrect: false },
            { text: "Fonte de Evento: Azure Service Bus. Receptor de Evento: Azure App Service. Manipulador de Evento: Azure Blob Storage.", isCorrect: false },
            { text: "Fonte de Evento: Azure Event Grid. Receptor de Evento: Azure Service Bus. Manipulador de Evento: Azure Blob Storage.", isCorrect: false },
            { text: "Fonte de Evento: Azure Blob Storage. Receptor de Evento: Azure Event Grid. Manipulador de Evento: Azure Logic App.", isCorrect: true }
        ]
    },
    {
        text: "Determine se a solução atende aos objetivos declarados. Você está desenvolvendo e implantando vários aplicativos web ASP.NET no Azure App Service. Você planeja salvar informações de estado de sessão e saída HTML. Você deve usar um mecanismo de armazenamento com os seguintes requisitos: Compartilhar o estado da sessão em todos os aplicativos web ASP.NET. Suportar acesso controlado e concorrente aos mesmos dados de estado de sessão para vários leitores e um único escritor. Salvar respostas HTTP completas para solicitações concorrentes. Você precisa armazenar as informações. Solução Proposta: Implantar e configurar um Azure Database for PostgreSQL. Atualizar os aplicativos web. A solução atende ao objetivo?",
        options: [
            { text: "Sim.", isCorrect: false },
            { text: "Não.", isCorrect: true }
        ]
    },
    {
        text: "Determine se a solução atende aos objetivos declarados. Você está desenvolvendo e implantando vários aplicativos web ASP.NET no Azure App Service. Você planeja salvar informações de estado de sessão e saída HTML. Você deve usar um mecanismo de armazenamento com os seguintes requisitos: Compartilhar o estado da sessão em todos os aplicativos web ASP.NET. Suportar acesso controlado e concorrente aos mesmos dados de estado de sessão para vários leitores e um único escritor. Salvar respostas HTTP completas para solicitações concorrentes. Você precisa armazenar as informações. Solução Proposta: Implantar e configurar o Azure Cache for Redis. Atualizar os aplicativos web. A solução atende ao objetivo?",
        options: [
            { text: "Sim.", isCorrect: true },
            { text: "Não.", isCorrect: false }
        ]
    },
    {
        text: "Uma empresa está desenvolvendo uma plataforma de jogos. Os usuários podem se juntar a equipes para jogar online e ver placares que incluem estatísticas dos jogadores. A solução inclui uma entidade chamada `Team`. Você planeja implementar uma instância do Azure Redis Cache para melhorar a eficiência das operações de dados para entidades que raramente mudam. Você precisa invalidar o cache quando os dados da equipe são alterados. Como você deve completar o código?",
        options: [
            { text: "Caixa 1: `IDatabase cache = Connection.GetDatabase();`. Caixa 2: `cache.StringSet('Team', '');`.", isCorrect: true },
            { text: "Caixa 1: `IDatabase cache = Connection.GetDatabase();`. Caixa 2: `cache ValueDelete('Team');`.", isCorrect: false },
            { text: "Caixa 1: `ICache cache = Connection.GetDatabase();`. Caixa 2: `cache KeyDelete('Team');`.", isCorrect: false },
            { text: "Caixa 1: `ICache cache = Connection.GetDatabase();`. Caixa 2: `cache StringGet('Team', '');`.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de sensitive data exposure?",
        options: [
            { text: "Azure Key Vault.", isCorrect: true },
            { text: "Azure AD B2C.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de missing function-level access control?",
        options: [
            { text: "Azure AD B2C.", isCorrect: true },
            { text: "Azure Firewall.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Application Gateway.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de unvalidated redirects and forwards?",
        options: [
            { text: "Application Gateway com WAF.", isCorrect: true },
            { text: "Azure AD B2C.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de insecure cryptographic storage?",
        options: [
            { text: "Azure Key Vault.", isCorrect: true },
            { text: "Azure AD B2C.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de insecure communications?",
        options: [
            { text: "Application Gateway com SSL/TLS.", isCorrect: true },
            { text: "Azure AD B2C.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de using components with known vulnerabilities?",
        options: [
            { text: "Azure Security Center.", isCorrect: true },
            { text: "Azure AD B2C.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Application Gateway.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de insufficient logging and monitoring?",
        options: [
            { text: "Azure Monitor.", isCorrect: true },
            { text: "Azure AD B2C.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Application Gateway.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de cross-site scripting (XSS)?",
        options: [
            { text: "Application Gateway com WAF.", isCorrect: true },
            { text: "Azure AD B2C.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de SQL injection?",
        options: [
            { text: "Application Gateway com WAF.", isCorrect: true },
            { text: "Azure AD B2C.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de cross-site request forgery (CSRF)?",
        options: [
            { text: "Azure AD B2C.", isCorrect: true },
            { text: "Azure Firewall.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Application Gateway.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de XML external entities (XXE)?",
        options: [
            { text: "Application Gateway com WAF.", isCorrect: true },
            { text: "Azure AD B2C.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de insecure deserialization?",
        options: [
            { text: "Application Gateway com WAF.", isCorrect: true },
            { text: "Azure AD B2C.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de broken authentication?",
        options: [
            { text: "Azure AD B2C.", isCorrect: true },
            { text: "Azure Firewall.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Application Gateway.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de broken access control?",
        options: [
            { text: "Azure AD B2C.", isCorrect: true },
            { text: "Azure Firewall.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Application Gateway.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de security misconfiguration?",
        options: [
            { text: "Application Gateway com WAF.", isCorrect: true },
            { text: "Azure AD B2C.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de using components with known vulnerabilities?",
        options: [
            { text: "Application Gateway com WAF.", isCorrect: true },
            { text: "Azure AD B2C.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de insufficient logging and monitoring?",
        options: [
            { text: "Azure Monitor.", isCorrect: true },
            { text: "Azure AD B2C.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptions = new Set();

// Elementos do DOM
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const nextButton = document.getElementById('next-question');
const scoreElement = document.getElementById('score');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');

// Inicializar o quiz
function initializeQuiz() {
    totalQuestionsElement.textContent = questions.length;
    displayQuestion();
}

// Exibir a questão atual
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.text;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option.text;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });

    resultContainer.classList.add('hidden');
    currentQuestionElement.textContent = currentQuestionIndex + 1;
}

// Selecionar uma opção
function selectOption(index) {
    const option = document.querySelectorAll('.option')[index];
    
    if (option.classList.contains('selected')) {
        option.classList.remove('selected');
        selectedOptions.delete(index);
    } else {
        option.classList.add('selected');
        selectedOptions.add(index);
    }

    // Verificar se todas as respostas corretas foram selecionadas
    const correctOptions = questions[currentQuestionIndex].options
        .map((opt, i) => ({ index: i, isCorrect: opt.isCorrect }))
        .filter(opt => opt.isCorrect)
        .map(opt => opt.index);

    const allCorrectSelected = correctOptions.every(i => selectedOptions.has(i));
    const noIncorrectSelected = Array.from(selectedOptions).every(i => 
        questions[currentQuestionIndex].options[i].isCorrect
    );

    if (allCorrectSelected && noIncorrectSelected && selectedOptions.size === correctOptions.length) {
        score++;
        scoreElement.textContent = score;
        resultMessage.textContent = 'Resposta correta!';
    } else {
        resultMessage.textContent = 'Resposta incorreta!';
    }

    resultContainer.classList.remove('hidden');
}

// Próxima questão
function nextQuestion() {
    currentQuestionIndex++;
    selectedOptions.clear();
    displayQuestion();
}

// Finalizar o quiz
function endQuiz() {
    questionElement.textContent = 'Quiz concluído!';
    optionsContainer.innerHTML = '';
    resultContainer.classList.add('hidden');
    
    const finalScore = document.createElement('div');
    finalScore.className = 'final-score';
    finalScore.innerHTML = `
        <h2>Quiz Concluído!</h2>
        <p>Sua pontuação final: ${score} de ${questions.length}</p>
        <button onclick="location.reload()">Jogar Novamente</button>
    `;
    optionsContainer.appendChild(finalScore);
}

// Event Listeners
nextButton.addEventListener('click', nextQuestion);

// Iniciar o quiz
initializeQuiz(); 