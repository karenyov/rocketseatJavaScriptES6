# rocketseatJavaScriptES6
Curso JavaScript ES6 - Rocketseat

## Executar: 
`yarn dev`


TABELA: paciente
| Parâmetro | Descrição |
|---|---|
| `id` | id interno |
| `registro` | registro recebido pela API |
| `nome` | Nome do Paciente |
| `autorizados_receber` | Nome dos Autorizados a receber, recebido pela API |
| `cep` | CEP de entrega |
| `logradouro` | Endereço de entrega |
| `numero` | Número de entrega |
| `bairro` | Bairro de entrega |
| `cidade` | Cidade da entrega |
| `telefone` | Telefone 1 |
| `telefone2` | Telefone 2 |

TABELA: receita
| Parâmetro | Descrição |
|---|---|
| `id` | id interno |
| `receita_termolabil_id` | id da receita recebido pela API |
| `receita` | identificador da receita recebido pela API |
| `data_atendimento` | Data do Atendimento |
| `romaneio_id` | id do Romaneio |
| `paciente_id` | id do Paciente |

TABELA: entrega
| Parâmetro | Descrição |
|---|---|
| `id` | id interno |
| `is_entregue` | define se a receita foi entregue  |
| `paciente_id` | id do Paciente |
| `motivo_analise_id` | Id do Motivo Análise |
| `assinatura` | assinatura em base64 |
| `latitude` | latitude da última localização |
| `longitude` | longitude da última localização |
| `accuracy` | ponto de acurácia |
| `timestamp_dispositivo` | Data e Hora do dispositivo |
| `timestamp_gps` | Date e Hora da última captura de localização do GPS |

TABELA: motivo_analise
| Parâmetro | Descrição |
|---|---|
| `id` | id interno |
| `motivo_analise_id` | id do motivo recebido pela API |
| `descricao` | Descrição do Motivo |
