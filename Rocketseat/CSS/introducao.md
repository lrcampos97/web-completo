# Introdução 

## Oque significa CSS?

* Cascading Style Sheet
* Código para criar estilos no HTML
* Linguagem style sheet


# Anatomia 


```
h1 {
    color: blue;
    font-size: 60px;
    background: gray;
}

```

* Selector (h1)
* Declaration (todo bloco de código dentro das {})
* Properties (color, font-size...)
* Property Values (blue, 60px..)

# Selectors

Conecta um elemento HTML com o CSS

## Tipos
* Global selector `*`
* Element/type selector `h1, h2, p, div`
* ID Selector `#box, #container`
* Class Selector `.red, .m-4`

# Box model

* Praticamente tudo são caixas no css
* Margin é o espaçamento por fora da "caixa"
* Padding é espaçamento por dentro da "caixa"

# Adicionando CSS

## Inline 
* Utilizando direto a tag STYLE.

## Style
* Tag html que irá  conter o css dentro do head

## Link (mais recomendado)
* <link rel="stylesheet" href="style.css>

## @import
* Regra css
* Importar por exemplo fonts do google
* Não indica pois deixa mais lenta a aplicação (utilizar link ao invés de import)

# A cascata (cascating)
* O browser lê de cima para baixo. (a aplicação do estilo) 
* Inline > tag style > tag link

## Especificidade
0. Universal selector
1. Element type selector (::before, ::after)
10. classes e attribute selectors
100. ID selector
1000. Inline

h1.title#my-title{
    color: blue;
}

-> No exemplo acima existe mais força, será aplicado de maneira mais específica

#my-title strong {
    color: gray;
}

body h1{
    color: red;
}

## Regra !important 

* cuidado, evite o uso
* não é considerado uma boa prática
* quebra o fluxo natural da cascata
* talvez seja necessário quando estou usando a biblioteca css de outra pessoa

# At-rules (significa arroba em ingles)

* Está relacionado ao comportamento do CSS
* começa com o sinal de `@` seguido do identificador e valor

## Exemplos comuns

* @import  /*incluir um css externo*/
* @media /*regras condicionadas para dispositivos*/
* @font-face /*fontes externas*/
* @keyframes /*Animations*/

# Shorthand 

* junção de propriedades
* resumido
* legível

```
    <!-- background properties -->
    background-color: #000;
    background-image: url(images/teste.jpg);
    background-repeat: no-repeat;
    background-position: left top;

    <!-- background shorthand -->
    background: #00 url(images/teste.jpg) no-repeat left top;

```

## Detalhes
* não irá considerar propriedades anteriores
* valores não especificados irão assumir o padrão
* geralmente a ordem NÃO importa, mas se houver muitas propriedades com valores semelhantes, podemos encontrar problemas

# Vendor prefixes

* Permite que browsers adicionem features para colocar uma novidade no CSS

```
p {
    -webkit-background-clip: text; /* chrome, safari, IOS e android. */
    -moz-background-clip: text; /* Mozila */
}
```