# Json Creater
O **Json Creater** foi um projeto criado com o intuito de facilitar o uso de arquivos JSON dentro dos nosso projetos.
Ela é uma aplicação que tem como intuito, facilitar e agilizar a forma como arquivos JSON's podem ser criados por meio de formulários.
O uso do **React** foi um elemento crucial para agilizar e fazer com que o desenvolvimento da aplicação. 


## Clonando e Rodando o Projeto



## Demo do Projeto


## Uso do Projeto




## Estudo do Projeto

### HTMLCollection vs. NodeList
Dentro do Input, vamos precisar trabalhar com uma estrutura que é muito parecida com o NodeList, que é a HTMLCollection. Eaa coleção possui um comportamento de array, sendo assim, eles podem ser acessados a partir de um index, e a propriedade `length` retorna a quantidade de elementos presentes dentro da coleção.

Deve-se ter em mente que apesar de se comportar de maneira parecida com um arrau, não necessariamente é um array. Um exemplo disso, é que elementos como `pop()`, `push()` e `join()` não são aplicáveis. Com isso, para pegarmos todos os elementos que estão presentes dentro do formulário, com exceção de um botão de criação de um novo campo, devemos criar um array com todos os elementos do HTMLCollection, e executar um `pop()`, para tirar ele.

### ForEach vs. Map
Os dois métodos, são usados par afazer manipulação de elementos dentro do array, mas diferente do map, que retorna um novo array, o `forEach` ele apenas retorna 
o valor de undefined. Por isso, quando queremos criar um novo array com os valroes tratados, queremos usar o map, mas quando vamos usar o array apenas para iterar, vamos usar o forEach, tendo em vista q é preciso retornar os valores os quais queremos trabalhar.


### Função filteringForm e retornando Arrays 




### useEffect hook