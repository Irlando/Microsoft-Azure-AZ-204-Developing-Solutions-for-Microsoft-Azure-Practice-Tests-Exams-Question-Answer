// Variáveis globais
let questions = [
    {
        text: "Você está desenvolvendo uma solução para um serviço de entrega móvel. Você está desenvolvendo um aplicativo móvel que os usuários podem usar para fazer pedidos de um restaurante em sua área. O aplicativo usa o seguinte fluxo de trabalho: 1. Um motorista seleciona os restaurantes para os quais fará entregas. 2. Os pedidos são enviados para todos os motoristas disponíveis em uma área. 3. Apenas pedidos dos restaurantes selecionados aparecerão para o motorista. 4. O primeiro motorista a aceitar um pedido o remove da lista de pedidos disponíveis. Você precisa implementar uma solução Azure Service Bus. Quais três ações você deve realizar em sequência?",
        image: "images/question121.png",
        options: [
            { text: "Caixa 1: Criar um único tópico do Service Bus. Caixa 2: Criar um Namespace do Service Bus para cada restaurante para o qual um motorista pode receber mensagens. Caixa 3: Criar uma assinatura do Service Bus para cada restaurante para o qual um motorista pode receber pedidos.", isCorrect: true },
            { text: "Caixa 1: Criar uma assinatura do Service Bus para cada restaurante para o qual um motorista pode receber pedidos. Caixa 2: Criar um tópico do Service Bus para cada restaurante. Caixa 3: Criar um Namespace do Service Bus para cada um.", isCorrect: false },
            { text: "Caixa 1: Criar um único tópico do Service Bus. Caixa 2: Criar uma assinatura do Service Bus para cada restaurante para o qual um motorista pode receber pedidos. Caixa 3: Criar um único tópico do Service Bus.", isCorrect: false },
            { text: "Caixa 1: Criar um único tópico do Service Bus. Caixa 2: Criar um Namespace do Service Bus para cada restaurante para o qual um motorista pode receber mensagens. Caixa 3: Criar um Namespace do Service Bus para cada um.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo de notícias e conteúdo de blog para dispositivos Windows. Uma notificação deve chegar ao dispositivo do usuário quando houver um novo artigo disponível para visualização. Você precisa implementar notificações push. Como você deve completar o segmento de código?",
        image: "images/question122.png",
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
        image: "images/question124.jpg",
        options: [
            { text: "Destino: Recurso do Azure. Credenciais de gateway: Certificado de cliente.", isCorrect: false },
            { text: "Destino: Certificado de cliente. Credenciais de gateway: Básico.", isCorrect: false },
            { text: "Destino: Recurso do Azure. Credenciais de gateway: Básico.", isCorrect: false },
            { text: "Destino: Endpoint HTTP(s). Credenciais de gateway: Certificado de cliente.", isCorrect: true }
        ]
    },
    {
        text: "Você está criando um aplicativo que usa o Event Grid para se conectar com outros serviços. Os dados de eventos do seu aplicativo serão enviados para uma função serverless que verifica a conformidade. Esta função é mantida pela sua empresa. Você escreve uma nova assinatura de evento no escopo do seu recurso. O evento deve ser invalidado após um período específico de tempo. Você precisa configurar o Event Grid. O que você deve fazer?",
        image: "images/question125.jpg",
        options: [
            { text: "Entrega de WebHook: Tokens SAS. Publicação de tópico: Handshake ValidationCode.", isCorrect: true },
            { text: "Entrega de WebHook: Autenticação por chave. Publicação de tópico: Handshake ValidationCode.", isCorrect: false },
            { text: "Entrega de WebHook: Controle de Acesso de Gerenciamento. Publicação de tópico: Handshake ValidationURL.", isCorrect: false },
            { text: "Entrega de WebHook: Tokens SAS. Publicação de tópico: Handshake ValidationURL.", isCorrect: false }
        ]
    },
    {
        text: "Você está trabalhando para a Contoso, Ltd. Você define um objeto de Política de API usando a seguinte marcação XML. Questão 1: O segmento XML pertence à seção `<inbound>` da política.",
        image: "images/question126_127_128.png",
        options: [
            { text: "Sim.", isCorrect: true },
            { text: "Não.", isCorrect: false }
        ]
    },
    {
        text: "Você está trabalhando para a Contoso, Ltd. Você define um objeto de Política de API usando a seguinte marcação XML. Questão 2: Se o tamanho do corpo for >256k, ocorrerá um erro.",
        image: "images/question126_127_128.png",
        options: [
            { text: "Sim.", isCorrect: false },
            { text: "Não.", isCorrect: true }
        ]
    },
    {
        text: "Você está trabalhando para a Contoso, Ltd. Você define um objeto de Política de API usando a seguinte marcação XML. Questão 3: Se a requisição for `<http://contoso.com/api/9.2/>`, a política manterá a versão mais alta.",
        image: "images/question126_127_128.png",
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
        image: "images/question125.jpg",
        options: [
            { text: "No arquivo `host.json`, diminuir o valor da opção batchSize.", isCorrect: false },
            { text: "Converter o gatilho para Azure Event Hub.", isCorrect: false },
            { text: "Converter a Função do Azure para o plano Premium.", isCorrect: true },
            { text: "No arquivo `function.json`, alterar o valor da opção type para queueScaling.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um serviço web REST. Os clientes acessarão o serviço usando uma instância do Azure API Management. O serviço web não lida corretamente com conflitos. Em vez de retornar um código de status HTTP 409, o serviço retorna um código de status 500. O corpo da mensagem de status contém apenas a palavra conflito. Você precisa garantir que os conflitos produzam a resposta correta. Como você deve completar a política?",
        image: "images/question131.png",
        options: [
            { text: "Caixa 1: `on-error`. Caixa 2: `context`. Caixa 3: `context`. Caixa 4: `set-status`. Caixa 5: `on-error`.", isCorrect: true },
            { text: "Caixa 1: `when-error`. Caixa 2: `context`. Caixa 3: `server`. Caixa 4: `override-status`. Caixa 5:`on-error`.", isCorrect: false },
            { text: "Caixa 1: `when-error`. Caixa 2: `context`. Caixa 3: `context`. Caixa 4: `set-status`. Caixa 5:`on-error`.", isCorrect: false },
            { text: "Caixa 1: `on-error`. Caixa 2: `context`. Caixa 3: `server`. Caixa 4: `override-status`. Caixa 5:`on-error`.", isCorrect: false }
        ]
    },
    {
        text: "Você é um desenvolvedor para uma empresa de Software como Serviço (SaaS). Você desenvolve soluções que fornecem a capacidade de enviar notificações usando Azure Notification Hubs. Você precisa criar um código de exemplo que os clientes possam usar como referência para como enviar notificações brutas para dispositivos Windows Push Notification Services (WNS). O código de exemplo não deve usar pacotes externos. Como você deve completar o segmento de código?",
        image: "images/question132.jpg",
        options: [
            { text: "Caixa 1: `windows`. Caixa 2: `application/octet-stream`.", isCorrect: true },
            { text: "Caixa 1: `windowsphone`. Caixa 2: `raw`.", isCorrect: false },
            { text: "Caixa 1: `windows`. Caixa 2: `application/json`.", isCorrect: false },
            { text: "Caixa 1: `windowsphone`. Caixa 2: `application/xml`.", isCorrect: false }
        ]
    },
    {
        text: "Você desenvolve e implanta um aplicativo web ASP.NET no Azure App Service. Você usa telemetria do Application Insights para monitorar o aplicativo. Você deve testar o aplicativo para garantir que ele esteja disponível e responsivo de vários pontos ao redor do mundo e em intervalos regulares. Se o aplicativo não estiver respondendo, você deve enviar um alerta para a equipe de suporte. Você precisa configurar um teste para o aplicativo web. Quais dois tipos de teste você pode usar?",
        image: "images/question134.png",
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
        image: "images/question138.jpg",
        options: [
            { text: "Fonte de Evento: Azure Event Grid. Receptor de Evento: Azure Logic App. Manipulador de Evento: Azure Service Bus.", isCorrect: false },
            { text: "Fonte de Evento: Azure Service Bus. Receptor de Evento: Azure App Service. Manipulador de Evento: Azure Blob Storage.", isCorrect: false },
            { text: "Fonte de Evento: Azure Event Grid. Receptor de Evento: Azure Service Bus. Manipulador de Evento: Azure Blob Storage.", isCorrect: false },
            { text: "Fonte de Evento: Azure Blob Storage. Receptor de Evento: Azure Event Grid. Manipulador de Evento: Azure Logic App.", isCorrect: true }
        ]
    },
    {
        text: "Determine se a solução atende aos objetivos declarados. Você está desenvolvendo e implantando vários aplicativos web ASP.NET no Azure App Service. Você planeja salvar informações de estado de sessão e saída HTML. Você deve usar um mecanismo de armazenamento com os seguintes requisitos: Compartilhar o estado da sessão em todos os aplicativos web ASP.NET. Suportar acesso controlado e concorrente aos mesmos dados de estado de sessão para vários leitores e um único escritor. Salvar respostas HTTP completas para solicitações concorrentes. Você precisa armazenar as informações. Solução Proposta: Implantar e configurar um Azure Database for PostgreSQL. Atualizar os aplicativos web. A solução atende ao objetivo?",
        image: "images/question139.png",
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
        image: "images/question138.jpg",
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
    },
    {
        text: "Você está criando um sistema de notificação de perigo que tem um único servidor de sinalização que aciona alarmes de áudio e visuais para iniciar e parar. Você implementa o Azure Service Bus para publicar alarmes. Cada controlador de alarme usa o Azure Service Bus para receber sinais de alarme como parte de uma transação. Os eventos de alarme devem ser registrados para fins de auditoria. Cada registro de transação deve incluir informações sobre o tipo de alarme que foi ativado. Você precisa implementar uma solução de auditoria de trilha de resposta. Quais duas ações você deve realizar?",
        options: [
            { text: "Atribuir o valor da propriedade `SessionID` da mensagem de perigo à propriedade `ReplyToSessionId`.", isCorrect: true },
            { text: "Atribuir o valor da propriedade `MessageId` da mensagem de perigo à propriedade `DevileryCount`.", isCorrect: false },
            { text: "Atribuir o valor da propriedade `SessionID` da mensagem de perigo à propriedade `SequenceNumber`.", isCorrect: false },
            { text: "Atribuir o valor da propriedade `MessageId` da mensagem de perigo à propriedade `CorrelationId`.", isCorrect: true },
            { text: "Atribuir o valor da propriedade `SequenceNumber` da mensagem de perigo à propriedade `DeliveryCount`.", isCorrect: false },
            { text: "Atribuir o valor da propriedade `MessageId` da mensagem de perigo à propriedade `SequenceNumber`.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo aplicativos para uma empresa. Você planeja hospedar os aplicativos no Azure App Services. A empresa tem os seguintes requisitos: A cada cinco minutos verificar se os sites estão responsivos. Verificar se os sites respondem dentro de um limite de tempo especificado. Solicitações dependentes, como imagens e arquivos JavaScript, devem carregar corretamente. Gerar alertas se um site estiver com problemas. Se um site falhar ao carregar, o sistema deve tentar recarregar o site mais três vezes. Você precisa implementar este processo com o mínimo de esforço. O que você deve fazer?",
        options: [
            { text: "Criar um teste web Selenium e configurá-lo para ser executado da sua estação de trabalho como uma tarefa agendada.", isCorrect: false },
            { text: "Configurar um teste de ping de URL para consultar a página inicial.", isCorrect: true },
            { text: "Criar uma função do Azure para consultar a página inicial.", isCorrect: false },
            { text: "Criar um teste web de várias etapas para consultar a página inicial.", isCorrect: false },
            { text: "Criar um Teste de Disponibilidade Personalizado para consultar a página inicial.", isCorrect: false }
        ]
    },
    {
        text: "Você desenvolve e adiciona várias funções a um aplicativo de Função do Azure que usa o host de runtime mais recente. As funções contêm vários endpoints de API REST protegidos usando SSL. O aplicativo de Função do Azure é executado em um plano de Consumo. Você deve enviar um alerta quando qualquer um dos endpoints de função estiver indisponível ou respondendo muito lentamente. Você precisa monitorar a disponibilidade e a responsividade das funções. O que você deve fazer?",
        options: [
            { text: "Criar um teste de ping de URL.", isCorrect: false },
            { text: "Criar uma função acionada por timer que chama `TrackAvailability()` e envia os resultados para o Application Insights.", isCorrect: true },
            { text: "Criar uma função acionada por timer que chama `GetMetric('Request Size')` e envia os resultados para o Application Insights.", isCorrect: false },
            { text: "Adicionar uma nova configuração de diagnóstico ao aplicativo de Função do Azure. Habilitar as opções `FunctionAppLogs` e Enviar para Log Analytics.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo uma solução de comércio eletrônico que usa uma arquitetura de microsserviços. Você precisa projetar um backplane de comunicação para comunicar mensagens transacionais entre várias partes da solução. As mensagens devem ser comunicadas em ordem primeiro a entrar, primeiro a sair (FIFO). O que você deve usar?",
        options: [
            { text: "Fila do Azure Storage.", isCorrect: false },
            { text: "Azure Event Hub.", isCorrect: false },
            { text: "Azure Service Bus.", isCorrect: true },
            { text: "Azure Event Grid.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo de serviço do Azure que processa dados de fila quando recebe uma mensagem de um aplicativo móvel. As mensagens podem não ser enviadas ao serviço consistentemente. Você tem os seguintes requisitos: O tamanho da fila não deve crescer mais que 80 gigabytes (GB). Usar ordenação primeiro a entrar, primeiro a sair (FIFO) de mensagens. Minimizar os custos do Azure. Você precisa implementar a solução de mensageria. Solução: Use a API .Net para adicionar uma mensagem a uma Fila do Azure Service Bus a partir do aplicativo móvel. Crie um Aplicativo de Função do Azure que usa um gatilho de Fila do Azure Service Bus. A solução atende ao objetivo?",
        options: [
            { text: "Sim.", isCorrect: true },
            { text: "Não.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo uma solução do Azure para coletar dados de dispositivos de ponto de venda (POS) de 2.000 lojas localizadas em todo o mundo. Um único dispositivo pode produzir 2 megabytes (MB) de dados a cada 24 horas. Cada local de loja tem um a cinco dispositivos que enviam dados. Você deve armazenar os dados do dispositivo no Azure Blob storage. Os dados do dispositivo devem ser correlacionados com base em um identificador de dispositivo. Lojas adicionais devem ser abertas no futuro. Você precisa implementar uma solução para receber os dados do dispositivo. Solução: Provisionar um Azure Event Hub. Configurar o identificador da máquina como a chave de partição e habilitar a captura. A solução atende ao objetivo?",
        options: [
            { text: "Sim.", isCorrect: true },
            { text: "Não.", isCorrect: false }
        ]
    },
    {
        text: "Uma empresa está desenvolvendo uma solução que permite que geladeiras inteligentes enviem informações de temperatura para um local central. A solução deve receber e armazenar mensagens até que possam ser processadas. Você cria uma instância do Azure Service Bus fornecendo um nome, nível de preço, assinatura, grupo de recursos e localização. Você precisa completar a configuração. Qual comando do Azure CLI ou PowerShell você deve executar?",
        options: [
            { text: "`az group create --name fridge-rg --location fridge-loc`.", isCorrect: false },
            { text: "`New-AzureRmServiceBusNamespace -ResourceGroupName fridge-rg -NamespaceName fridge-ns -Location fridge-loc`.", isCorrect: false },
            { text: "`New-AzureRmServiceBusQueue -ResourceGroupName fridge-rg -NamespaceName fridge-ns -Name fridge-q -EnablePartitioning $False`.", isCorrect: true },
            { text: "`az servicebus namespace create --resource-group fridge-rg --name fridge-rg --location fridge-loc`.", isCorrect: false }
        ]
    },
    {
        text: "Sua empresa tem um aplicativo web chamado `WebApp1`. Você usa o WebJobs SDK para projetar uma tarefa em segundo plano do App Service acionada que invoca automaticamente uma função no código sempre que novos dados são recebidos em uma fila. Você está se preparando para configurar o serviço processa um item de dados da fila. Qual dos seguintes é o serviço que você deve usar?",
        options: [
            { text: "Logic Apps.", isCorrect: false },
            { text: "WebJobs.", isCorrect: true },
            { text: "Flow.", isCorrect: false },
            { text: "Functions.", isCorrect: false }
        ]
    },
    {
        text: "Sua empresa tem uma assinatura do Azure. Você precisa implantar várias máquinas virtuais do Azure na assinatura usando modelos do Azure Resource Manager (ARM). As máquinas virtuais serão incluídas em um único conjunto de disponibilidade. Você precisa garantir que o modelo ARM permita que o maior número possível de máquinas virtuais permaneça acessível em caso de falha de malha ou manutenção. Qual dos seguintes é o valor que você deve configurar para a propriedade `platformFaultDomainCount`?",
        options: [
            { text: "10.", isCorrect: false },
            { text: "30.", isCorrect: false },
            { text: "Valor Mínimo.", isCorrect: false },
            { text: "Valor Máximo.", isCorrect: true }
        ]
    },
    {
        text: "Você tem dois hosts Hyper-V chamados `Host1` e `Host2`. O Host1 tem uma máquina virtual do Azure chamada `VM1` que foi implantada usando um modelo personalizado do Azure Resource Manager. Você precisa mover `VM1` para `Host2`. O que você deve fazer?",
        options: [
            { text: "Na lâmina `Update management`, clique em Habilitar.", isCorrect: false },
            { text: "Na lâmina `Overview`, mova `VM1` para uma assinatura diferente.", isCorrect: false },
            { text: "Na lâmina `Redeploy`, clique em Redeploy.", isCorrect: true },
            { text: "Na lâmina `Profile`, modifique o local de uso.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Cosmos DB. O aplicativo deve ser capaz de armazenar dados JSON. Você precisa implementar uma solução de armazenamento de dados. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Core (SQL) API.", isCorrect: true },
            { text: "MongoDB API.", isCorrect: false },
            { text: "Cassandra API.", isCorrect: false },
            { text: "Gremlin API.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure App Service. O aplicativo deve ser capaz de executar tarefas em segundo plano. Você precisa implementar uma solução de tarefas em segundo plano. Qual das seguintes opções você deve usar?",
        options: [
            { text: "WebJobs.", isCorrect: true },
            { text: "Azure Functions.", isCorrect: false },
            { text: "Azure Logic Apps.", isCorrect: false },
            { text: "Azure Event Grid.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Key Vault. O aplicativo deve ser capaz de armazenar e gerenciar certificados. Você precisa implementar uma solução de certificados. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Certificates.", isCorrect: true },
            { text: "Secrets.", isCorrect: false },
            { text: "Keys.", isCorrect: false },
            { text: "Tokens.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Monitor. O aplicativo deve ser capaz de monitorar a disponibilidade de um site. Você precisa implementar uma solução de monitoramento. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Availability Tests.", isCorrect: true },
            { text: "Metrics.", isCorrect: false },
            { text: "Logs.", isCorrect: false },
            { text: "Alerts.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure API Management. O aplicativo deve ser capaz de limitar a taxa de chamadas de API. Você precisa implementar uma solução de limitação de taxa. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Rate Limit Policy.", isCorrect: true },
            { text: "Quota Policy.", isCorrect: false },
            { text: "Cache Policy.", isCorrect: false },
            { text: "CORS Policy.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Cache for Redis. O aplicativo deve ser capaz de armazenar dados em cache com expiração. Você precisa implementar uma solução de cache com expiração. Qual das seguintes opções você deve usar?",
        options: [
            { text: "EXPIRE.", isCorrect: true },
            { text: "SET.", isCorrect: false },
            { text: "GET.", isCorrect: false },
            { text: "DEL.", isCorrect: false }
        ]
    },
    {
        text: "Uma empresa tem um aplicativo web que usa o Azure App Service. O aplicativo deve ser capaz de processar dados de um banco de dados NoSQL. Você precisa implementar uma solução de banco de dados. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Azure Cosmos DB.", isCorrect: true },
            { text: "Azure SQL Database.", isCorrect: false },
            { text: "Azure Database for MySQL.", isCorrect: false },
            { text: "Azure Database for PostgreSQL.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Functions. O aplicativo deve ser capaz de processar eventos do Azure Event Grid. Você precisa implementar um gatilho para o Azure Functions. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Event Grid Trigger.", isCorrect: true },
            { text: "HTTP Trigger.", isCorrect: false },
            { text: "Timer Trigger.", isCorrect: false },
            { text: "Queue Trigger.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Service Bus. O aplicativo deve ser capaz de garantir a ordem das mensagens. Você precisa implementar uma solução de ordenação de mensagens. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Sessions.", isCorrect: true },
            { text: "Partitions.", isCorrect: false },
            { text: "Topics.", isCorrect: false },
            { text: "Queues.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure SQL Database. O aplicativo deve ser capaz de se conectar de forma segura ao banco de dados. Você precisa implementar uma solução de conexão segura. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Azure Active Directory Authentication.", isCorrect: true },
            { text: "SQL Server Authentication.", isCorrect: false },
            { text: "Windows Authentication.", isCorrect: false },
            { text: "Basic Authentication.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Key Vault. O aplicativo deve ser capaz de armazenar e recuperar segredos de forma segura. Você precisa implementar uma solução de segredos. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Secrets.", isCorrect: true },
            { text: "Keys.", isCorrect: false },
            { text: "Certificates.", isCorrect: false },
            { text: "Tokens.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Monitor. O aplicativo deve ser capaz de enviar métricas personalizadas. Você precisa implementar uma solução de métricas. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Custom Metrics.", isCorrect: true },
            { text: "Platform Metrics.", isCorrect: false },
            { text: "Guest Metrics.", isCorrect: false },
            { text: "Activity Logs.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure API Management. O aplicativo deve ser capaz de proteger APIs. Você precisa implementar uma solução de segurança de API. Qual das seguintes opções você deve usar?",
        options: [
            { text: "JWT Validation Policy.", isCorrect: true },
            { text: "IP Filter Policy.", isCorrect: false },
            { text: "CORS Policy.", isCorrect: false },
            { text: "Cache Policy.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Cache for Redis. O aplicativo deve ser capaz de armazenar dados em cache. Você precisa implementar uma solução de cache. Qual das seguintes opções você deve usar?",
        options: [
            { text: "String.", isCorrect: true },
            { text: "List.", isCorrect: false },
            { text: "Set.", isCorrect: false },
            { text: "Hash.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure App Service. O aplicativo deve ser capaz de escalar automaticamente com base na carga. Você precisa implementar uma solução de escala automática. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Auto Scale Rules.", isCorrect: true },
            { text: "Manual Scale.", isCorrect: false },
            { text: "Fixed Scale.", isCorrect: false },
            { text: "Custom Scale.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Logic Apps. O aplicativo deve ser capaz de processar arquivos XML. Você precisa implementar uma solução de processamento de XML. Qual das seguintes opções você deve usar?",
        options: [
            { text: "XML Validation Action.", isCorrect: true },
            { text: "JSON Validation Action.", isCorrect: false },
            { text: "Schema Validation Action.", isCorrect: false },
            { text: "Data Validation Action.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Event Hub. O aplicativo deve ser capaz de processar eventos em tempo real. Você precisa implementar uma solução de processamento de eventos. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Event Processor Host.", isCorrect: true },
            { text: "Event Consumer.", isCorrect: false },
            { text: "Event Producer.", isCorrect: false },
            { text: "Event Handler.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Blob Storage. O aplicativo deve ser capaz de armazenar dados não estruturados. Você precisa implementar uma solução de armazenamento. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Block Blobs.", isCorrect: true },
            { text: "Page Blobs.", isCorrect: false },
            { text: "Append Blobs.", isCorrect: false },
            { text: "File Shares.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Container Registry. O aplicativo deve ser capaz de armazenar imagens Docker. Você precisa implementar uma solução de registro de contêiner. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Basic Tier.", isCorrect: true },
            { text: "Standard Tier.", isCorrect: false },
            { text: "Premium Tier.", isCorrect: false },
            { text: "Free Tier.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Application Insights. O aplicativo deve ser capaz de monitorar o desempenho. Você precisa implementar uma solução de monitoramento de desempenho. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Performance Counters.", isCorrect: true },
            { text: "Custom Events.", isCorrect: false },
            { text: "Page Views.", isCorrect: false },
            { text: "Dependencies.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Service Fabric. O aplicativo deve ser capaz de manter o estado entre reinicializações. Você precisa implementar uma solução de estado. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Reliable Collections.", isCorrect: true },
            { text: "Memory Cache.", isCorrect: false },
            { text: "Local Storage.", isCorrect: false },
            { text: "Temporary Storage.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Kubernetes Service (AKS). O aplicativo deve ser capaz de escalar automaticamente os pods com base na carga. Você precisa implementar uma solução de escala automática. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Horizontal Pod Autoscaler.", isCorrect: true },
            { text: "Vertical Pod Autoscaler.", isCorrect: false },
            { text: "Cluster Autoscaler.", isCorrect: false },
            { text: "Manual Scaler.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure DevOps. O aplicativo deve ser capaz de executar testes automatizados durante o processo de build. Você precisa implementar uma solução de teste automatizado. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Azure Pipelines.", isCorrect: true },
            { text: "Azure Boards.", isCorrect: false },
            { text: "Azure Repos.", isCorrect: false },
            { text: "Azure Artifacts.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Front Door. O aplicativo deve ser capaz de distribuir o tráfego entre diferentes regiões. Você precisa implementar uma solução de balanceamento de carga. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Load Balancing Rules.", isCorrect: true },
            { text: "Routing Rules.", isCorrect: false },
            { text: "Traffic Rules.", isCorrect: false },
            { text: "Distribution Rules.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure CDN. O aplicativo deve ser capaz de armazenar em cache conteúdo estático. Você precisa implementar uma solução de cache. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Caching Rules.", isCorrect: true },
            { text: "Routing Rules.", isCorrect: false },
            { text: "Compression Rules.", isCorrect: false },
            { text: "Security Rules.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Application Gateway. O aplicativo deve ser capaz de rotear o tráfego com base no caminho da URL. Você precisa implementar uma solução de roteamento. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Path-based Routing.", isCorrect: true },
            { text: "Host-based Routing.", isCorrect: false },
            { text: "Port-based Routing.", isCorrect: false },
            { text: "Protocol-based Routing.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Traffic Manager. O aplicativo deve ser capaz de rotear o tráfego para o endpoint mais próximo do usuário. Você precisa implementar uma solução de roteamento. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Performance Routing Method.", isCorrect: true },
            { text: "Priority Routing Method.", isCorrect: false },
            { text: "Weighted Routing Method.", isCorrect: false },
            { text: "Geographic Routing Method.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Virtual Network. O aplicativo deve ser capaz de se comunicar com recursos em outra rede virtual. Você precisa implementar uma solução de conectividade. Qual das seguintes opções você deve usar?",
        options: [
            { text: "VNet Peering.", isCorrect: true },
            { text: "VPN Gateway.", isCorrect: false },
            { text: "ExpressRoute.", isCorrect: false },
            { text: "Network Security Group.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Active Directory B2C. O aplicativo deve ser capaz de autenticar usuários usando provedores de identidade social. Você precisa implementar uma solução de autenticação. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Identity Providers.", isCorrect: true },
            { text: "User Flows.", isCorrect: false },
            { text: "Custom Policies.", isCorrect: false },
            { text: "Application Registration.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Key Vault. O aplicativo deve ser capaz de rotacionar automaticamente as chaves. Você precisa implementar uma solução de rotação de chaves. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Key Rotation Policy.", isCorrect: true },
            { text: "Access Policy.", isCorrect: false },
            { text: "Backup Policy.", isCorrect: false },
            { text: "Recovery Policy.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Storage. O aplicativo deve ser capaz de replicar dados para outra região. Você precisa implementar uma solução de replicação. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Geo-Redundant Storage (GRS).", isCorrect: true },
            { text: "Locally Redundant Storage (LRS).", isCorrect: false },
            { text: "Zone Redundant Storage (ZRS).", isCorrect: false },
            { text: "Read-Access Geo-Redundant Storage (RA-GRS).", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Cosmos DB. O aplicativo deve ser capaz de executar consultas complexas. Você precisa implementar uma solução de consulta. Qual das seguintes opções você deve usar?",
        options: [
            { text: "SQL API.", isCorrect: true },
            { text: "MongoDB API.", isCorrect: false },
            { text: "Cassandra API.", isCorrect: false },
            { text: "Gremlin API.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Functions. O aplicativo deve ser capaz de processar arquivos quando são carregados em um contêiner de blob. Você precisa implementar uma solução de trigger. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Blob Trigger.", isCorrect: true },
            { text: "Queue Trigger.", isCorrect: false },
            { text: "Timer Trigger.", isCorrect: false },
            { text: "HTTP Trigger.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Service Bus. O aplicativo deve ser capaz de enviar mensagens para múltiplos consumidores. Você precisa implementar uma solução de mensageria. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Topics.", isCorrect: true },
            { text: "Queues.", isCorrect: false },
            { text: "Event Hubs.", isCorrect: false },
            { text: "Event Grid.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Logic Apps. O aplicativo deve ser capaz de se conectar a diferentes serviços. Você precisa implementar uma solução de conectividade. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Connectors.", isCorrect: true },
            { text: "Actions.", isCorrect: false },
            { text: "Triggers.", isCorrect: false },
            { text: "Workflows.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Event Grid. O aplicativo deve ser capaz de reagir a eventos do Azure Storage. Você precisa implementar uma solução de eventos. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Event Grid System Topics.", isCorrect: true },
            { text: "Event Grid Custom Topics.", isCorrect: false },
            { text: "Event Grid Domains.", isCorrect: false },
            { text: "Event Grid Subscriptions.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Monitor. O aplicativo deve ser capaz de enviar logs personalizados. Você precisa implementar uma solução de logging. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Log Analytics Workspace.", isCorrect: true },
            { text: "Application Insights.", isCorrect: false },
            { text: "Azure Monitor Metrics.", isCorrect: false },
            { text: "Azure Monitor Alerts.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure API Management. O aplicativo deve ser capaz de transformar o formato da resposta. Você precisa implementar uma solução de transformação. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Outbound Processing Policy.", isCorrect: true },
            { text: "Inbound Processing Policy.", isCorrect: false },
            { text: "Backend Policy.", isCorrect: false },
            { text: "Forward Request Policy.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Container Instances. O aplicativo deve ser capaz de acessar recursos em uma rede virtual. Você precisa implementar uma solução de rede. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Virtual Network Integration.", isCorrect: true },
            { text: "Service Endpoints.", isCorrect: false },
            { text: "Private Endpoints.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure App Configuration. O aplicativo deve ser capaz de gerenciar configurações de feature flags. Você precisa implementar uma solução de feature flags. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Feature Manager.", isCorrect: true },
            { text: "Configuration Manager.", isCorrect: false },
            { text: "Settings Manager.", isCorrect: false },
            { text: "App Manager.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure SignalR Service. O aplicativo deve ser capaz de enviar mensagens em tempo real. Você precisa implementar uma solução de mensagens em tempo real. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Broadcast.", isCorrect: true },
            { text: "Unicast.", isCorrect: false },
            { text: "Multicast.", isCorrect: false },
            { text: "Anycast.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Notification Hubs. O aplicativo deve ser capaz de enviar notificações push para dispositivos móveis. Você precisa implementar uma solução de notificações. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Platform Notification System (PNS).", isCorrect: true },
            { text: "Push Notification Service (PNS).", isCorrect: false },
            { text: "Mobile Notification Service (MNS).", isCorrect: false },
            { text: "Device Notification Service (DNS).", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Cognitive Services. O aplicativo deve ser capaz de analisar sentimentos em textos. Você precisa implementar uma solução de análise de sentimentos. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Text Analytics API.", isCorrect: true },
            { text: "Computer Vision API.", isCorrect: false },
            { text: "Speech Services API.", isCorrect: false },
            { text: "Language Understanding API.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Search. O aplicativo deve ser capaz de realizar buscas em documentos PDF. Você precisa implementar uma solução de indexação. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Skillset.", isCorrect: true },
            { text: "Indexer.", isCorrect: false },
            { text: "Data Source.", isCorrect: false },
            { text: "Index.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Bot Service. O aplicativo deve ser capaz de entender linguagem natural. Você precisa implementar uma solução de processamento de linguagem natural. Qual das seguintes opções você deve usar?",
        options: [
            { text: "LUIS.", isCorrect: true },
            { text: "QnA Maker.", isCorrect: false },
            { text: "Bot Framework.", isCorrect: false },
            { text: "Direct Line.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Media Services. O aplicativo deve ser capaz de transmitir vídeos ao vivo. Você precisa implementar uma solução de streaming. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Live Events.", isCorrect: true },
            { text: "Assets.", isCorrect: false },
            { text: "Content Keys.", isCorrect: false },
            { text: "Streaming Endpoints.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure IoT Hub. O aplicativo deve ser capaz de processar mensagens de dispositivos IoT em tempo real. Você precisa implementar uma solução de processamento de mensagens. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Event Hub-compatible Endpoint.", isCorrect: true },
            { text: "Service Bus Queue.", isCorrect: false },
            { text: "Storage Queue.", isCorrect: false },
            { text: "Service Bus Topic.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Batch. O aplicativo deve ser capaz de executar tarefas paralelas em um conjunto de máquinas virtuais. Você precisa implementar uma solução de processamento em lote. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Pool.", isCorrect: true },
            { text: "Job.", isCorrect: false },
            { text: "Task.", isCorrect: false },
            { text: "Node.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure DevTest Labs. O aplicativo deve ser capaz de criar ambientes de teste automaticamente. Você precisa implementar uma solução de automação. Qual das seguintes opções você deve usar?",
        options: [
            { text: "ARM Templates.", isCorrect: true },
            { text: "PowerShell Scripts.", isCorrect: false },
            { text: "Azure CLI Scripts.", isCorrect: false },
            { text: "Custom Scripts.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Application Gateway. O aplicativo deve ser capaz de proteger contra ataques web comuns. Você precisa implementar uma solução de segurança. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Web Application Firewall (WAF).", isCorrect: true },
            { text: "Network Security Groups (NSG).", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false },
            { text: "DDoS Protection.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Front Door. O aplicativo deve ser capaz de proteger contra ataques DDoS. Você precisa implementar uma solução de proteção. Qual das seguintes opções você deve usar?",
        options: [
            { text: "DDoS Protection Standard.", isCorrect: true },
            { text: "DDoS Protection Basic.", isCorrect: false },
            { text: "Web Application Firewall.", isCorrect: false },
            { text: "Network Security Groups.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Private Link. O aplicativo deve ser capaz de acessar recursos do Azure de forma privada. Você precisa implementar uma solução de conectividade privada. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Private Endpoint.", isCorrect: true },
            { text: "Service Endpoint.", isCorrect: false },
            { text: "VNet Integration.", isCorrect: false },
            { text: "VNet Peering.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure ExpressRoute. O aplicativo deve ser capaz de se conectar à rede local de forma segura. Você precisa implementar uma solução de conectividade híbrida. Qual das seguintes opções você deve usar?",
        options: [
            { text: "ExpressRoute Circuit.", isCorrect: true },
            { text: "VPN Gateway.", isCorrect: false },
            { text: "VNet Peering.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Bastion. O aplicativo deve ser capaz de acessar máquinas virtuais de forma segura. Você precisa implementar uma solução de acesso remoto. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Bastion Host.", isCorrect: true },
            { text: "Jump Box.", isCorrect: false },
            { text: "Remote Desktop.", isCorrect: false },
            { text: "SSH Client.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Security Center. O aplicativo deve ser capaz de monitorar a segurança dos recursos. Você precisa implementar uma solução de monitoramento de segurança. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Security Policies.", isCorrect: true },
            { text: "Security Alerts.", isCorrect: false },
            { text: "Security Recommendations.", isCorrect: false },
            { text: "Security Scores.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Sentinel. O aplicativo deve ser capaz de detectar ameaças de segurança. Você precisa implementar uma solução de detecção de ameaças. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Analytics Rules.", isCorrect: true },
            { text: "Playbooks.", isCorrect: false },
            { text: "Workbooks.", isCorrect: false },
            { text: "Hunting Queries.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Kubernetes Service (AKS). O aplicativo deve ser capaz de autenticar usuários usando o Azure Active Directory. Você precisa implementar uma solução de autenticação. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Pod Identity.", isCorrect: true },
            { text: "Service Principal.", isCorrect: false },
            { text: "Managed Identity.", isCorrect: false },
            { text: "User Identity.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Container Registry. O aplicativo deve ser capaz de automatizar o build de imagens Docker. Você precisa implementar uma solução de automação. Qual das seguintes opções você deve usar?",
        options: [
            { text: "ACR Tasks.", isCorrect: true },
            { text: "Docker Build.", isCorrect: false },
            { text: "Azure Pipelines.", isCorrect: false },
            { text: "GitHub Actions.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Functions. O aplicativo deve ser capaz de executar código em resposta a eventos do Azure DevOps. Você precisa implementar uma solução de integração. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Webhook Trigger.", isCorrect: true },
            { text: "HTTP Trigger.", isCorrect: false },
            { text: "Timer Trigger.", isCorrect: false },
            { text: "Queue Trigger.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Logic Apps. O aplicativo deve ser capaz de processar mensagens em lote. Você precisa implementar uma solução de processamento em lote. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Split On.", isCorrect: true },
            { text: "For Each.", isCorrect: false },
            { text: "Until.", isCorrect: false },
            { text: "Switch.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Event Hub. O aplicativo deve ser capaz de processar eventos em ordem. Você precisa implementar uma solução de processamento ordenado. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Event Hub Partitions.", isCorrect: true },
            { text: "Event Hub Consumer Groups.", isCorrect: false },
            { text: "Event Hub Capture.", isCorrect: false },
            { text: "Event Hub AMQP.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Service Bus. O aplicativo deve ser capaz de processar mensagens mortas. Você precisa implementar uma solução de gerenciamento de mensagens mortas. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Dead-Letter Queue.", isCorrect: true },
            { text: "Error Queue.", isCorrect: false },
            { text: "Retry Queue.", isCorrect: false },
            { text: "Backup Queue.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Storage. O aplicativo deve ser capaz de armazenar dados de forma hierárquica. Você precisa implementar uma solução de armazenamento hierárquico. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Data Lake Storage Gen2.", isCorrect: true },
            { text: "Blob Storage.", isCorrect: false },
            { text: "File Storage.", isCorrect: false },
            { text: "Queue Storage.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Cosmos DB. O aplicativo deve ser capaz de realizar consultas geoespaciais. Você precisa implementar uma solução de consulta geoespacial. Qual das seguintes opções você deve usar?",
        options: [
            { text: "ST_DISTANCE.", isCorrect: true },
            { text: "ST_LENGTH.", isCorrect: false },
            { text: "ST_AREA.", isCorrect: false },
            { text: "ST_WITHIN.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure SQL Database. O aplicativo deve ser capaz de escalar automaticamente com base na carga de CPU. Você precisa implementar uma solução de escala automática. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Serverless Compute Tier.", isCorrect: true },
            { text: "Provisioned Compute Tier.", isCorrect: false },
            { text: "Basic Tier.", isCorrect: false },
            { text: "Standard Tier.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Cache for Redis. O aplicativo deve ser capaz de manter a consistência dos dados em cache. Você precisa implementar uma solução de consistência. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Redis Replication.", isCorrect: true },
            { text: "Redis Clustering.", isCorrect: false },
            { text: "Redis Persistence.", isCorrect: false },
            { text: "Redis Backup.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure API Management. O aplicativo deve ser capaz de validar tokens JWT. Você precisa implementar uma solução de validação. Qual das seguintes opções você deve usar?",
        options: [
            { text: "validate-jwt Policy.", isCorrect: true },
            { text: "check-header Policy.", isCorrect: false },
            { text: "authentication-basic Policy.", isCorrect: false },
            { text: "authentication-certificate Policy.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Functions. O aplicativo deve ser capaz de processar arquivos grandes. Você precisa implementar uma solução de processamento de arquivos. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Durable Functions.", isCorrect: true },
            { text: "Timer Functions.", isCorrect: false },
            { text: "Queue Functions.", isCorrect: false },
            { text: "HTTP Functions.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Logic Apps. O aplicativo deve ser capaz de lidar com erros durante a execução. Você precisa implementar uma solução de tratamento de erros. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Retry Policy.", isCorrect: true },
            { text: "Timeout Policy.", isCorrect: false },
            { text: "Throttling Policy.", isCorrect: false },
            { text: "Concurrency Policy.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Event Grid. O aplicativo deve ser capaz de filtrar eventos antes do processamento. Você precisa implementar uma solução de filtragem. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Advanced Filtering.", isCorrect: true },
            { text: "Basic Filtering.", isCorrect: false },
            { text: "Subject Filtering.", isCorrect: false },
            { text: "Type Filtering.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Monitor. O aplicativo deve ser capaz de criar alertas baseados em métricas personalizadas. Você precisa implementar uma solução de alerta. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Dynamic Thresholds.", isCorrect: true },
            { text: "Static Thresholds.", isCorrect: false },
            { text: "Activity Log Alerts.", isCorrect: false },
            { text: "Log Alerts.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Application Insights. O aplicativo deve ser capaz de rastrear exceções personalizadas. Você precisa implementar uma solução de rastreamento. Qual das seguintes opções você deve usar?",
        options: [
            { text: "TrackException.", isCorrect: true },
            { text: "TrackEvent.", isCorrect: false },
            { text: "TrackMetric.", isCorrect: false },
            { text: "TrackTrace.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Key Vault. O aplicativo deve ser capaz de acessar segredos usando identidades gerenciadas. Você precisa implementar uma solução de acesso. Qual das seguintes opções você deve usar?",
        options: [
            { text: "System-assigned Managed Identity.", isCorrect: true },
            { text: "User-assigned Managed Identity.", isCorrect: false },
            { text: "Service Principal.", isCorrect: false },
            { text: "Access Key.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Storage. O aplicativo deve ser capaz de gerar URLs de acesso temporário para blobs. Você precisa implementar uma solução de acesso temporário. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Shared Access Signature (SAS).", isCorrect: true },
            { text: "Access Keys.", isCorrect: false },
            { text: "Managed Identity.", isCorrect: false },
            { text: "Service Principal.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Cosmos DB. O aplicativo deve ser capaz de realizar operações em lote. Você precisa implementar uma solução de operações em lote. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Stored Procedures.", isCorrect: true },
            { text: "Triggers.", isCorrect: false },
            { text: "User-Defined Functions.", isCorrect: false },
            { text: "Change Feed.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Functions. O aplicativo deve ser capaz de processar mensagens em ordem. Você precisa implementar uma solução de processamento ordenado. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Single Instance.", isCorrect: true },
            { text: "Multiple Instances.", isCorrect: false },
            { text: "Scale Out.", isCorrect: false },
            { text: "Scale Up.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Service Bus. O aplicativo deve ser capaz de garantir a entrega de mensagens. Você precisa implementar uma solução de garantia de entrega. Qual das seguintes opções você deve usar?",
        options: [
            { text: "At-Least-Once Delivery.", isCorrect: true },
            { text: "At-Most-Once Delivery.", isCorrect: false },
            { text: "Best-Effort Delivery.", isCorrect: false },
            { text: "Fire-and-Forget Delivery.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Event Grid. O aplicativo deve ser capaz de processar eventos em ordem. Você precisa implementar uma solução de ordenação de eventos. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Event Time.", isCorrect: true },
            { text: "Event ID.", isCorrect: false },
            { text: "Event Type.", isCorrect: false },
            { text: "Event Subject.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Logic Apps. O aplicativo deve ser capaz de processar arquivos XML grandes. Você precisa implementar uma solução de processamento de XML. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Integration Account.", isCorrect: true },
            { text: "Standard Account.", isCorrect: false },
            { text: "Basic Account.", isCorrect: false },
            { text: "Free Account.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Functions. O aplicativo deve ser capaz de executar tarefas de longa duração. Você precisa implementar uma solução de execução de longa duração. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Durable Functions.", isCorrect: true },
            { text: "Timer Functions.", isCorrect: false },
            { text: "Queue Functions.", isCorrect: false },
            { text: "HTTP Functions.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Service Bus. O aplicativo deve ser capaz de processar mensagens em ordem por sessão. Você precisa implementar uma solução de processamento ordenado. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Session Handling.", isCorrect: true },
            { text: "Message Handling.", isCorrect: false },
            { text: "Queue Handling.", isCorrect: false },
            { text: "Topic Handling.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Storage. O aplicativo deve ser capaz de processar blobs em ordem. Você precisa implementar uma solução de processamento ordenado. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Metadata Properties.", isCorrect: true },
            { text: "System Properties.", isCorrect: false },
            { text: "Custom Properties.", isCorrect: false },
            { text: "Blob Properties.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Cosmos DB. O aplicativo deve ser capaz de processar alterações em documentos. Você precisa implementar uma solução de processamento de alterações. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Change Feed.", isCorrect: true },
            { text: "Change Tracking.", isCorrect: false },
            { text: "Change Detection.", isCorrect: false },
            { text: "Change Processing.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure API Management. O aplicativo deve ser capaz de transformar respostas XML. Você precisa implementar uma solução de transformação. Qual das seguintes opções você deve usar?",
        options: [
            { text: "XSLT Policy.", isCorrect: true },
            { text: "XML Policy.", isCorrect: false },
            { text: "JSON Policy.", isCorrect: false },
            { text: "Text Policy.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Functions. O aplicativo deve ser capaz de processar mensagens de uma fila do Service Bus. Você precisa implementar uma solução de processamento de mensagens. Qual das seguintes opções você deve usar?",
        options: [
            { text: "ServiceBusTrigger.", isCorrect: true },
            { text: "QueueTrigger.", isCorrect: false },
            { text: "BlobTrigger.", isCorrect: false },
            { text: "EventGridTrigger.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Logic Apps. O aplicativo deve ser capaz de processar mensagens em paralelo. Você precisa implementar uma solução de processamento paralelo. Qual das seguintes opções você deve usar?",
        options: [
            { text: "ForEach Parallel.", isCorrect: true },
            { text: "ForEach Sequential.", isCorrect: false },
            { text: "Until Loop.", isCorrect: false },
            { text: "Do Until Loop.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Event Hub. O aplicativo deve ser capaz de processar eventos em tempo real. Você precisa implementar uma solução de processamento em tempo real. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Stream Analytics.", isCorrect: true },
            { text: "Batch Processing.", isCorrect: false },
            { text: "Queue Processing.", isCorrect: false },
            { text: "Topic Processing.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Service Bus. O aplicativo deve ser capaz de processar mensagens em lote. Você precisa implementar uma solução de processamento em lote. Qual das seguintes opções você deve usar?",
        options: [
            { text: "PrefetchCount.", isCorrect: true },
            { text: "BatchSize.", isCorrect: false },
            { text: "MaxConcurrentCalls.", isCorrect: false },
            { text: "MaxAutoRenewDuration.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo que usa o Azure Storage. O aplicativo deve ser capaz de processar blobs em paralelo. Você precisa implementar uma solução de processamento paralelo. Qual das seguintes opções você deve usar?",
        options: [
            { text: "Blob Lease.", isCorrect: true },
            { text: "Blob Lock.", isCorrect: false },
            { text: "Blob Concurrency.", isCorrect: false },
            { text: "Blob Synchronization.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de failure to restrict URL access?",
        options: [
            { text: "Azure AD com RBAC.", isCorrect: true },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false },
            { text: "Application Gateway.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de direct object references?",
        options: [
            { text: "Azure AD com RBAC.", isCorrect: true },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false },
            { text: "Application Gateway.", isCorrect: false }
        ]
    },
    {
        text: "Você está configurando a segurança para um aplicativo web no Azure App Service. Qual das seguintes opções você deve usar para proteger o aplicativo contra ataques de missing function level access control?",
        options: [
            { text: "Azure AD com RBAC.", isCorrect: true },
            { text: "Network Security Groups.", isCorrect: false },
            { text: "Azure Firewall.", isCorrect: false },
            { text: "Application Gateway.", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo uma solução de mensagens do Azure que deve implementar um sistema de notificação de perigo. A solução deve implementar as seguintes ações: Auditar todos os eventos de alarme. Garantir que todos os eventos sejam processados. Qual serviço do Azure você deve usar?",
        options: [
            { text: "Azure Service Bus", isCorrect: true },
            { text: "Azure Event Grid", isCorrect: false },
            { text: "Azure Notification Hubs", isCorrect: false },
            { text: "Azure Event Hubs", isCorrect: false }
        ]
    },
    {
        text: "Você precisa implementar um processo de monitoramento para Azure App Services. O processo deve verificar a capacidade de resposta do site a cada 30 segundos. Se o site não responder dentro de 1 minuto, um alerta deve ser gerado. Qual tipo de sinal você deve usar ao criar a regra de alerta?",
        options: [
            { text: "Metric", isCorrect: true },
            { text: "Log", isCorrect: false },
            { text: "Activity Log", isCorrect: false },
            { text: "Availability", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo uma solução que monitora a disponibilidade e capacidade de resposta dos endpoints do Azure Functions. A solução deve coletar dados de telemetria sobre o desempenho dos endpoints. Qual serviço do Azure você deve usar?",
        options: [
            { text: "Application Insights", isCorrect: true },
            { text: "Azure Monitor", isCorrect: false },
            { text: "Azure Log Analytics", isCorrect: false },
            { text: "Azure Event Hubs", isCorrect: false }
        ]
    },
    {
        text: "Você está projetando um backplane de comunicação para uma arquitetura de microsserviços. A solução deve garantir que as mensagens sejam entregues na ordem FIFO (First In, First Out). Qual serviço do Azure você deve usar?",
        options: [
            { text: "Azure Service Bus com sessões habilitadas", isCorrect: true },
            { text: "Azure Event Grid", isCorrect: false },
            { text: "Azure Event Hubs", isCorrect: false },
            { text: "Azure Queue Storage", isCorrect: false }
        ]
    },
    {
        text: "Você está desenvolvendo um aplicativo de serviço Azure que processa dados de uma fila. O tamanho das mensagens pode exceder 64 KB. Você precisa minimizar os custos de armazenamento. Qual serviço do Azure você deve usar?",
        options: [
            { text: "Azure Storage Queue", isCorrect: true },
            { text: "Azure Service Bus", isCorrect: false },
            { text: "Azure Event Hubs", isCorrect: false },
            { text: "Azure Event Grid", isCorrect: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptions = new Set();
let userName = '';
let userRole = '';

// Elementos do DOM
const formContainer = document.getElementById('form-container');
const quizContainer = document.getElementById('quiz-container');
const nameInput = document.getElementById('name');
const roleInput = document.getElementById('role');
const startButton = document.getElementById('start-quiz');
const questionElement = document.getElementById('question');
const questionImageElement = document.getElementById('question-image');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const nextButton = document.getElementById('next-question');
const scoreElement = document.getElementById('score');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');

// Função para salvar resultados no CSV
function saveResultsToCSV() {
    const date = new Date().toISOString();
    const csvContent = `Nome,Cargo/Função,Pontuação,Total de Questões,Data e Hora\n${userName},${userRole},${score},${questions.length},${date}`;
    
    // Criar um blob com o conteúdo CSV
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // Criar um link para download automático
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'quiz_results.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Iniciar o quiz
function startQuiz() {
    userName = nameInput.value.trim();
    userRole = roleInput.value.trim();
    
    if (userName && userRole) {
        formContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsElement.textContent = questions.length;
        displayQuestion();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}

// Exibir a questão atual
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.text;
    
    // Exibir imagem se existir
    if (question.image) {
        questionImageElement.src = question.image;
        questionImageElement.style.display = 'block';
    } else {
        questionImageElement.style.display = 'none';
    }

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
        <p>Parabéns ${userName}!</p>
        <p>Sua pontuação final: ${score} de ${questions.length}</p>
        <button onclick="saveResultsToCSV()">Salvar Resultados</button>
        <button onclick="location.reload()">Jogar Novamente</button>
    `;
    optionsContainer.appendChild(finalScore);
}

// Event Listeners
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);

// Inicializar o quiz
quizContainer.style.display = 'none';