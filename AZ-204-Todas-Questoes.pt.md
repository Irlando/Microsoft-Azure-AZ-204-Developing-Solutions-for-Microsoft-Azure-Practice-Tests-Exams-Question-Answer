# Microsoft Azure AZ-204: Desenvolvendo Soluções para Microsoft Azure - Todas as Questões

Este arquivo contém todas as questões traduzidas para português do exame AZ-204: Desenvolvendo Soluções para Microsoft Azure.

## Índice

- [Sobre a Certificação](#sobre-a-certificação)
- [Estrutura do Exame](#estrutura-do-exame)
- [Questões de Exame](#questões-de-exame)

## Sobre a Certificação

A certificação AZ-204: Desenvolvendo Soluções para Microsoft Azure é projetada para desenvolvedores que desejam demonstrar suas habilidades em:

- Desenvolvimento de soluções baseadas em nuvem
- Implementação de serviços de armazenamento do Azure
- Implementação de segurança
- Monitoramento, solução de problemas e otimização de soluções do Azure

## Estrutura do Exame

O exame AZ-204 cobre os seguintes domínios:

1. Desenvolvimento de soluções de computação do Azure (25-30%)
2. Desenvolvimento para armazenamento do Azure (15-20%)
3. Implementação de segurança do Azure (20-25%)
4. Monitoramento, solução de problemas e otimização de soluções do Azure (15-20%)
5. Conectando e consumindo serviços do Azure e APIs de terceiros (15-20%)

## Questões de Exame

### Você está desenvolvendo um aplicativo que usa o Azure Service Bus para processar mensagens de pedidos. O aplicativo contém as seguintes características: Processa pedidos em lotes. Marca pedidos como concluídos após o processamento. Remove pedidos concluídos da fila. Você precisa implementar o processamento de mensagens. Qual abordagem você deve recomendar?

- [ ] Usar o modo ReceiveAndDelete.
- [x] Usar o modo PeekLock com Complete().
- [ ] Usar o modo PeekLock com Abandon().
- [ ] Usar o modo ReceiveAndDelete com Abandon().

**[⬆ Voltar ao Topo](#índice)**

### Você está desenvolvendo um aplicativo que usa o Azure Service Bus para processar mensagens. O aplicativo deve processar mensagens na ordem em que foram enviadas. Você precisa implementar o processamento de mensagens. Qual recurso você deve usar?

- [ ] Tópicos.
- [x] Sessões.
- [ ] Assinaturas.
- [ ] Filas.

**[⬆ Voltar ao Topo](#índice)**

### Você está desenvolvendo um aplicativo que usa o Azure Service Bus para processar mensagens. O aplicativo deve garantir que as mensagens sejam entregues mesmo se o receptor estiver offline. Você precisa implementar o processamento de mensagens. Qual recurso você deve usar?

- [ ] Tópicos.
- [ ] Sessões.
- [x] Filas.
- [ ] Assinaturas.

**[⬆ Voltar ao Topo](#índice)**

### Você está desenvolvendo um aplicativo que usa o Azure Service Bus para processar mensagens. O aplicativo deve permitir que múltiplos receptores processem diferentes tipos de mensagens simultaneamente. Você precisa implementar o processamento de mensagens. Qual recurso você deve usar?

- [x] Tópicos.
- [ ] Sessões.
- [ ] Filas.
- [ ] Grupos de Consumidores.

**[⬆ Voltar ao Topo](#índice)**

### Você está desenvolvendo um aplicativo que usa o Azure Service Bus para processar mensagens. O aplicativo deve garantir que as mensagens sejam processadas apenas uma vez. Você precisa implementar o processamento de mensagens. Qual modo de recebimento você deve usar?

- [ ] ReceiveAndDelete.
- [x] PeekLock.
- [ ] Peek.
- [ ] Receive.

**[⬆ Voltar ao Topo](#índice)**
