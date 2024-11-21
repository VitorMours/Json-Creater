# Json Creater
O **Json Creater** foi um projeto criado com o intuito de facilitar o uso de arquivos JSON dentro dos nosso projetos.
Ela é uma aplicação que tem como intuito, facilitar e agilizar a forma como arquivos JSON's podem ser criados por meio de formulários.
O uso do **React** foi um elemento crucial para agilizar e fazer com que o desenvolvimento da aplicação se desse de maneira rápida, e eficiente. 


## Clonando e Rodando o Projeto
Para clonar nosso projeto dentro da página, podemos executar o seguinte comando dentro do nosso terminal:

```bash
git clone https://github.com/VitorMours/Json-Creater.git
```

e posteriormente a isso, podemos rodar o nosso código por meio do seguinte script:
```bash
npm run start
```

## Estudo do Projeto

### HTMLCollection vs. NodeList
Dentro do Input, vamos precisar trabalhar com uma estrutura que é muito parecida com o NodeList, que é a HTMLCollection. Eaa coleção possui um comportamento de array, sendo assim, eles podem ser acessados a partir de um index, e a propriedade `length` retorna a quantidade de elementos presentes dentro da coleção.

Deve-se ter em mente que apesar de se comportar de maneira parecida com um arrau, não necessariamente é um array. Um exemplo disso, é que elementos como `pop()`, `push()` e `join()` não são aplicáveis. Com isso, para pegarmos todos os elementos que estão presentes dentro do formulário, com exceção de um botão de criação de um novo campo, devemos criar um array com todos os elementos do HTMLCollection, e executar um `pop()`, para tirar ele.

### ForEach vs. Map
Os dois métodos, são usados par afazer manipulação de elementos dentro do array, mas diferente do map, que retorna um novo array, o `forEach` ele apenas retorna 
o valor de undefined. Por isso, quando queremos criar um novo array com os valroes tratados, queremos usar o map, mas quando vamos usar o array apenas para iterar, vamos usar o forEach, tendo em vista q é preciso retornar os valores os quais queremos trabalhar.


### Função filteringForm e retornando Arrays 
Devido o fato de trabalharmos com formulários, e ser uma estrutura fixa, temos que a filtragem de dados é importante para enviar os dados apra o outro componente de forma eficiente, e limpa. Com isso, temos que a função de filtragem foi necessária, para justamente fazer o tratamento dele, de forma que retornemos somente os dados que precisemos. 

```js
function filteringForm(form){
  let formElements = form.children;
  let bruteData = [...formElements];
  bruteData.pop()    

  let data = bruteData.map(data_div => {
    let nameData = data_div.children[0].children[1].value;
    let typeData = data_div.children[1].children[2].value;
    return {name: nameData, type:typeData};
  });

  return data;
}
```

### UseEffect
O UseEffect é um hook dentro do react, que é usado para trabalhar com os colatrais do código de um componente, ou para fazer manipulação de dados após a redenreização inicial, por exemplo. Com isso, por manipularmos os dados presentes dentro do componente de `Preview`, após a renderização dele ser feito, precisamos usar esse hook, pois o mesmo trata do mesmo para nós. Outra vantagem desse hook, é que ele permite fazermos a lógica da manipulação, à parte dos dados de renderização que iremos mostrar. Com isso, temos que a estrutura do hook useEffect, é:

```js
useEffect(() => {
  // Oque acontece com mudança de dependências
  
  // Função opcional de limpeza
  return () => {
    // Código de limpeza
  };
}, [/* dependências */]); // Array de dependências (quando muda, é executado)
```
