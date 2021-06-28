<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Medición de la campaña publicitaria
    p Cuando en una empresa se toma la decisión de realizar una campaña publicitaria, una estrategia táctica de comunicación o sencillamente un anuncio, se hace con el fin de obtener respuestas positivas de sus clientes y lograr los objetivos propuestos. Además, la promoción hace parte del mercadeo y es una de sus variables más importantes; nada logra una empresa teniendo un excelente producto si no le comunica al mercado que este existe y está disponible en puntos de venta, que satisface sus necesidades y que presenta ciertos beneficios. Luego, el mercado toma la decisión de compra basado en estas variables, por lo que entre más oportuna y completa sea la información, mayor será el nivel de aceptación del producto o servicio.
    .col-lg-6.mx-auto
      img(src='@/assets/curso/t1/f1.svg', alt='Personas viendo plan de marketing').my-4
    .col-lg-10.mx-auto
      .cajon.color-primario.px-5.py-4.mb-4.fpc
        p.mb-0 Así, el pretest y el postest forman parte del control que se realiza a la campaña publicitaria y de acuerdo con el proceso de la comunicación; este control se lleva a cabo sobre el mensaje, la planeación de las estrategias y los resultados de la campaña.
      .row.align-items-center.mb-4
        .col-lg-2
          img(src='@/assets/curso/t1/f2.svg', alt='ícono ads')._131px.mx-auto
        .col-lg-10
          p.mb-0 En cuanto al mensaje, este se puede evaluar antes y después del lanzamiento de la campaña; y un estudio previo a la campaña permite seleccionar el más adecuado, realizar todos los cambios pertinentes y evitar que sea incomprensible, erróneo o ambiguo. Mientras que el análisis posterior permite medir el nivel de comprensión real que el mercado tuvo del mensaje y la realización de correcciones para publicaciones futuras.
      .row.align-items-center.mb-4
        .col-lg-2
          img(src='@/assets/curso/t1/f3.svg', alt='ícono ads')._131px.mx-auto
        .col-lg-10
          p.mb-0 Por su parte, la planeación se analiza con base en el nivel de información que se haya recolectado para la toma de decisiones y la efectividad de la campaña de acuerdo con los indicadores de gestión de la misma, el impacto que el mensaje haya tenido en el mercado y el aumento en ventas después de la campaña.
    Separador
    #t_1_1.titulo-segundo
      h2 1.1 ¿Qué se requiere para medir la campaña?
    LineaTiempoIcon.mb-5(:datos="datosLineaTiempoIcon")
    Separador
    #t_1_2.titulo-segundo
      h2 1.2 Pretest y postest
    .row.align-items-center.mb-4
      .col-lg-5
        img(src='@/assets/curso/t1/f13.svg', alt='Dos personas con una pantalla')
      .col-lg-7
        p.mb-0 Las empresas que han decidido realizar una campaña publicitaria han destinado un presupuesto significativo en la realización de la misma, de ahí la importancia de hacer test a los anuncios que son los elementos que finalmente verá el mercado y que generarán resultados medibles para el cumplimento de los objetivos. En el desarrollo de una campaña publicitaria la empresa tiene la posibilidad de realizar dos tipos de mediciones: pretest y postest, ambos representan un alto nivel de relevancia para lograr los objetivos de la campaña y permiten minimizar los riesgos en su ejecución.
    h3 Pretest
    p El pretest en la publicidad es entendido como el conjunto de investigaciones dirigidas a evaluar los anuncios publicitarios, antes de su publicación en los medios de comunicación, las cuales son realizadas desde el desarrollo del concepto creativo hasta el arte finalizado, con el fin de valorar y mejorar los anuncios para que logren los objetivos propuestos.
    p Es importante dejar claro que la mayoría de las empresas no realizan pretest, lo que deriva en múltiples fallas de tipo comunicacional que no pueden corregirse una vez los anuncios estén al aire, generando pérdidas monetarias en pauta, producción y diseño de piezas. Es claro que un pretest implica un costo para la empresa; sin embargo, este costo puede ser poco significativo frente a las pérdidas generadas por el desarrollo de una campaña que es poco efectiva, que no es comprensible o que no genera impacto en el público objetivo.
    .row.align-items-center.mb-4
      .col-lg-5
        p Cuando se realiza un pretest debe hacerse con una muestra del público objetivo; es decir, la selección de las personas que van a ser testeadas deben coincidir con el perfil de cliente del producto o servicio que se está promocionando. Adicionalmente, la realización de estos test, debe hacerse con el fin de realizar los cambios necesarios en las piezas publicitarias, de lo contrario perderían su razón de ser.
        p.mb-0 Los beneficios de realizarlo se pueden derivar en la inversión de pauta que se haga en medios; por ejemplo, un pretest puede arrojar que un anuncio tiene un nivel de recordación o de impacto de 30%, frente a otro que tiene una recordación del 60%; con estos datos la empresa puede tomar la decisión de incrementar la pauta del primer anuncio y reducirla en el segundo, ahorrando una parte considerable del presupuesto. Este ejemplo también lleva a recalcar la importancia de realizar una adecuada planeación del pretest y de cada una de las mediciones que de él se van a derivar para lograr la mayor efectividad posible en la campaña publicitaria.
      .col-lg-7
        img(src='@/assets/curso/t1/f14.svg', alt='Dos personas con una pantalla')
    p.mb-5 El fin de un pretest es diagnosticar si un anuncio es eficaz o si debe ser ajustado para lograr los objetivos de la campaña, este proceso debe hacerse antes de la publicación en los medios de comunicación. Sin embargo, su realización se puede desglosar en objetivos más puntuales:
    .row.align-items-start.justify-content-between.mb-4
      .borde-acento.tarjeta.p-5
        img(src='@/assets/curso/t1/f15.svg', alt='icono relacionado')._131px.mx-auto.mb-5
        p.mb-5.text-center Escoger entre varios anuncios o conceptos creativos.
      .borde-acento.tarjeta.p-5
        img(src='@/assets/curso/t1/f16.svg', alt='icono relacionado')._131px.mx-auto.mb-5
        p.mb-5.text-center Definir el grado de comprensión que tiene el mercado acerca del mensaje que se busca transmitir.
      .borde-acento.tarjeta.p-5
        img(src='@/assets/curso/t1/f17.svg', alt='icono relacionado')._131px.mx-auto.mb-5
        p.mb-5.text-center Determinar el grado de credibilidad del mensaje publicitario.
      .borde-acento.tarjeta.p-5
        img(src='@/assets/curso/t1/f18.svg', alt='icono relacionado')._131px.mx-auto.mb-5
        p.mb-5.text-center Determinar el nivel de impacto que tiene el mensaje sobre el público objetivo.
    .row.align-items-start.mb-5
      .borde-acento.tarjeta.p-5.mx-auto
        img(src='@/assets/curso/t1/f19.svg', alt='icono relacionado')._131px.mx-auto.mb-5
        p.mb-5.text-center Definir si el mensaje está en contra de la ética y moral de la audiencia.
      .borde-acento.tarjeta.p-5.mx-auto
        img(src='@/assets/curso/t1/f20.svg', alt='icono relacionado')._131px.mx-auto.mb-5
        p.mb-5.text-center Conocer el grado de asociación del mensaje con el producto o servicio.
      .borde-acento.tarjeta.p-5.mx-auto
        img(src='@/assets/curso/t1/f21.svg', alt='icono relacionado')._131px.mx-auto.mb-5
        p.mb-5.text-center Medir el grado de recordación del mensaje.
      .borde-acento.tarjeta.p-5.mx-auto
        img(src='@/assets/curso/t1/gra-01.svg', alt='icono relacionado')._131px.mx-auto.mb-5
        p.mb-5.text-center Medir el nivel de evocación del mensaje.
    h3 Momento para la realización del pretest
    p Es importante recordar que el pretest se hace durante el proceso de elaboración de la campaña publicitaria y, mientras se realiza la campaña, el mensaje debe ser sometido a un minucioso sistema de creación; es por eso que el pretest puede estar presente en diferentes fases:
    .col-lg-10.mx-auto.mb-5
      LineaTiempoD.color-acento-contenido
        p.px-5(numero="1" titulo="Durante el desarrollo del concepto") Aquí los creativos pueden determinar si el direccionamiento que le están dando al mensaje es el adecuado o deben hacer algún ajuste que garantice la eficacia de la campaña. Un pretest de concepto no es garantía de éxito, pero puede contribuir a minimizar riesgos en la toma de decisiones y a tener una visión más cercana con las expectativas del público objetivo. Se realiza en los siguientes casos:
          br
          ul.lista-ul--separador.my-4
            li 
              i.fas.fa-play.color-morado.me-4.ms-5
              | Cuando derivados de las técnicas creativas, se generaron varios conceptos o ejes de comunicación.
            li 
              i.fas.fa-play.color-morado.me-4.ms-5
              | Cuando hay dudas sobre el concepto creativo que se ha seleccionado para la campaña.
            li 
              i.fas.fa-play.color-morado.me-4.ms-5
              | Cuando el concepto seleccionado es muy novedoso y no se ha realizado algo similar antes.
            li 
              i.fas.fa-play.color-morado.me-4.ms-5
              | Cuando el anunciante propone un concepto propio.
        p.px-5(numero="2" titulo="Primeras reacciones") Este momento permite conocer las reacciones del público objetivo frente a un boceto más elaborado de la pieza gráfica y conocer si el mensaje es comprensible en su conjunto de imágenes y textos.
        p.px-5(numero="3" titulo="Anuncio terminado") En este punto se expone ante una muestra del público objetivo el anuncio publicitario terminado y tal como se verá publicado en los medios de comunicación.
    h3 Tipos de pretest
    p.mb-5 Existen varios tipos de test que se pueden realizar para el proceso creativo de una campaña, el que utilice una empresa está supeditado al presupuesto de la campaña y el nivel de precisión que se espera tener de las mediciones a realizar; encontrando las siguientes técnicas:
    .col-lg-11.mx-auto
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span a
          p <b>Fisiológicos:</b> se realizan utilizando tecnología de punta para el análisis de la percepción del público objetivo frente a un anuncio o grupo de anuncios publicitarios. Este tipo de mediciones han avanzado de forma exponencial desde la incursión de la neurociencia en el ámbito comercial y publicitario, en el que se pueden acceder a varias herramientas de uso médico y militar para determinar la efectividad de una pieza gráfica y su mensaje. Se encuentran:
            TabsC.color-primario.my-4
              .py-3.py-md-4(titulo="Resonancia magnética")
                .row.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    p <b><em>Functional Magnetic Resonance Imaging</em> (imágenes de resonancia magnética):</b> esta técnica permite obtener imágenes de la actividad cerebral mientras se realiza una actividad. A través de una gráfica de una parte del cerebro es posible visualizar las alteraciones que se producen en él cuando se está desarrollando una actividad en particular.
                  .col-md-6
                    img(src='@/assets/curso/t1/i1.png', alt='Resonancia magnética')
              .py-3.py-md-4(titulo="Electroencefalograma")
                .row.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    p <b>Electroencefalograma (EEG):</b> esta tecnología no invasiva permite conocer las áreas con mayor actividad en el cerebro. A través de unos electrodos que se ubican en la cabeza es posible medir las ondas cerebrales y conocer qué zonas del cerebro responden a unos determinados estímulos en tiempo real.
                  .col-md-6
                    img(src='@/assets/curso/t1/i2.png', alt='Electroencefalograma')
              .py-3.py-md-4(titulo="Eye tracking")
                .row.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    p <b><em>Eye Tracking:</em></b> es una herramienta más asequible para la mayoría de empresas. Permite medir y monitorizar el movimiento de los ojos; y define:
                    ul.lista-ul--separador.my-4
                      li 
                        i.fas.fa-play.color-morado.me-4.ms-5
                        | Tiempo que una persona se concentra en un objeto determinado.
                      li 
                        i.fas.fa-play.color-morado.me-4.ms-5
                        | Espacios de interés.
                      li 
                        i.fas.fa-play.color-morado.me-4.ms-5
                        | Jerarquizar los puntos vistos.
                      li 
                        i.fas.fa-play.color-morado.me-4.ms-5
                        | El impacto emocional y cognitivo a partir de la pupilometría.
                  .col-md-6
                    img(src='@/assets/curso/t1/i3.png', alt='Eye tracking')
              .py-3.py-md-4(titulo="Facial reading")
                .row.align-items-center
                  .col-md-6.mb-4.mb-md-0
                    p <b><em>Facial reading:</em></b> se basa en el lenguaje no verbal que los seres humanos expresan a través de los gestos, miradas y movimiento de los ojos, cejas y boca a nivel milimétrico. Por esta razón, esta tecnología detecta cambios mínimos en la expresión y hace estimaciones muy precisas de datos como edad, género y estado de ánimo.
                  .col-md-6
                    img(src='@/assets/curso/t1/i4.png', alt='Facial reading')
        li 
          .lista-ol--cuadro__vineta
            span b
          p <b>Cualitativos:</b> para el desarrollo de este tipo de test se utilizan métodos cuantitativos de investigación: sesiones de grupo, técnicas proyectivas para conocer los sentimientos de los individuos hacia los anuncios publicitarios, entre otros. Este tipo de test se utilizan en las primeras etapas del proceso creativo.
        li 
          .lista-ol--cuadro__vineta
            span c
          p <b>Cuantitativos:</b> utilizan por lo general encuestas y entrevistas en profundidad. Este tipo de entrevistas son las que mejor se adaptan a la obtención de los datos que se esperan obtener. Son utilizadas sobre todo en medios masivos convencionales. Hoy en día la analítica web genera datos cuantitativos muy precisos gracias al nivel de medición estadística que generan las diferentes plataformas web.
    h5 Pretest individual
    p Se ejecuta cuando la empresa ha realizado un único anuncio publicitario para publicar en los diferentes medios de comunicación, en este caso los esfuerzos de la investigación se enfocan en conocer la comprensión del mensaje y los posibles ajustes que se deben realizar a la pieza para lograr la mayor efectividad posible.
    h5 Pretest múltiple
    p.mb-5 Este tipo de test se realiza a una campaña conformada por varios anuncios publicitarios y que serán expuestos en diferentes medios. En este caso las mediciones se llevan a cabo para determinar los anuncios con mayor impacto, comprensión y recordación para determinar cuáles tendrán mayor presencia en los medios y, por ende, la manera como se distribuirá el presupuesto de la campaña en cuanto a la pauta.
    h3 Postest
    .col-lg-10.mx-auto
      .cajon.color-primario.px-5.py-4.mb-4.fpc
        p.mb-0 El postest es un proceso de investigación que se realiza durante el proceso de ejecución de la campaña publicitaria; este permite medir los efectos que ha tenido o tuvo la campaña y el logro de los objetivos de la misma.
    h4 Momento de realización de un postest
    p El postest es un proceso de medición indispensable para determinar si la inversión que se está realizando en publicidad se va a recuperar o se recuperó en algún momento de la campaña, pues muchas campañas tienen efectos inmediatos en el nivel de ventas, el nivel de recordación de una marca o en aspectos más técnicos en cuanto a lo digital, así como el nivel de conversión, las suscripciones a un sitio web, las visitas a una página de aterrizaje o la interacción con una publicación en una red social. Es importante, entonces, definir en qué momentos se van a realizar los test de una campaña, de acuerdo con las necesidades de medición que se tiene. Para tal efecto se pueden encontrar:
    .row.align-items-center.mb-5
      .col-lg-4
        img(src='@/assets/curso/t1/f22.svg', alt='Persona leyendo analíticas')
      .col-lg-8
        p <b>De única vez:</b> estos se realizan una sola vez y en un momento específico de la campaña, puede ser al inicio al final, con el fin de realizar un análisis en un periodo en particular y determinar los resultados alcanzados en ese momento. 
        p <b>Continuos o <em>tracking</em>:</b> se realizan en varios momentos de la campaña para medir los efectos de la misma al inicio o al final y en estadios intermedios. Permite determinar si los resultados se presentan de forma progresiva y en qué medios se ha generado una mejor respuesta; además de conocer el impacto en el mercado objetivo para futuras campañas.
    h4 Datos para analizar en un postest
    p.mb-5 Los postest deben tener principalmente un enfoque de medición cuantitativa, pues lo que se busca es determinar si se están cumpliendo los objetivos de acuerdo con los indicadores planteados en cuanto alcance, frecuencia, intensidad, nivel de ventas y respuesta del mercado objetivo. Sin embargo, muchos test tienen también enfoques cualitativos basados con la información que necesite recogerse, de estos hacen parte:
    .col-lg-10.mx-auto
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/t1/f23.svg' alt='Ícono relacionado')
        .tarjeta.fondo-casi-blanco
          .p-4
            p.mb-0 <b>Penetración:</b> en este punto se hace una medición de la recordación que tiene el mensaje y el producto en relación con la campaña. Cuando esta incluye varios anuncios debe hacerse un análisis de cada uno de ellos para determinar el nivel de recordación que estos tienen frente al mercado objetivo. La recordación de un producto o marca es variada dependiendo del tipo de producto y de la interacción del mercado con él. Se pueden definir varios tipos de recordación:
      ol.lista-ol--cuadro.lista-ol--separador.mb-5
        li 
          .lista-ol--cuadro__vineta
            span a
          p <b><em>Top of Mind:</em></b> es un tipo de medición que hacen algunas empresas de investigación de mercados, para determinar las marcas que de cada categoría están en la mente de los consumidores y en qué orden estos las recuerdan. Sin embargo, este top de marcas en la mente de los consumidores depende en gran medida de factores externos como el contexto, el perfil de los clientes y la publicidad.
        li 
          .lista-ol--cuadro__vineta
            span b
          p <b><em>Top of Heart:</em></b> es un nivel superior al Top of Mind, ya que representa el grado de afinidad y cariño que el mercado tiene con una marca en particular. En este punto los consumidores adoptan un producto o una marca como parte de su vida, por el nivel de empatía que hace que se identifique a un nivel muy personal con ella. También pueden interferir factores como la tradición y la nostalgia.
        li 
          .lista-ol--cuadro__vineta
            span c
          p <b>Grupo evocado:</b> conformado por las marcas específicas de productos que el consumidor considera en primera instancia.
        li 
          .lista-ol--cuadro__vineta
            span d
          p <b>Grupo inepto:</b> son las marcas que el consumidor elimina de tajo en su proceso de compra.
        li 
          .lista-ol--cuadro__vineta
            span e
          p <b>Grupo inerte:</b> son marcas que el consumidor ignora por no encontrar en ellas algún beneficio o ventaja en particular.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/t1/f24.svg' alt='Ícono relacionado')
        .tarjeta.fondo-casi-blanco
          .p-4
            p.mb-0 <b>Audiencia alcanzada:</b> los niveles de ventas, leads y otros indicadores de respuesta del mercado objetivo son mediciones que permiten determinar la efectividad de la campaña.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/t1/f25.svg' alt='Ícono relacionado')
        .tarjeta.fondo-casi-blanco
          .p-4
            p.mb-0 <b>Modificación de actitudes e imagen:</b> de acuerdo con los objetivos de comunicación que también incluyen aspectos cualitativos, es necesario medir los cambios en las actitudes del mercado objetivo y los cambios en la imagen que el producto o servicio, basado con la percepción del target.
      .tarjeta-avatar-b.mb-5
        img(src='@/assets/curso/t1/f26.svg' alt='Ícono relacionado')
        .tarjeta.fondo-casi-blanco
          .p-4
            p.mb-0 <b>Comportamiento de compra:</b> toda acción de marketing, inclusive las campañas publicitarias, tienen como finalidad el incremento en las ventas o un cambio de actitud frente a ellas, este es un elemento a medir en el postest y representa un alto nivel de importancia para determinar si se está cumpliendo con los indicadores. Sin embargo, se puede dar el caso en que una campaña tiene como finalidad el cambio en el consumo de un producto o las razones para hacerlo; por ejemplo, que un detergente no se use únicamente para lavar la ropa, sino que se utilice como multiusos.




  
</template>

<script>
import LineaTiempoIcon from '../components/LineaTiempoIcon'
export default {
  name: 'Tema1',
  components: {
    LineaTiempoIcon,
  },
  data: () => ({
    datosLineaTiempoIcon: [
      {
        img: require('@/assets/curso/t1/f4.svg'),
        texto:
          'Tener claros los objetivos y los indicadores que se buscan medir.',
      },
      {
        img: require('@/assets/curso/t1/f5.svg'),
        texto:
          'Planear los test al detalle; es decir, que se logren detectar detalles mínimos del mensaje para maximizar su eficacia.',
      },
      {
        img: require('@/assets/curso/t1/f6.svg'),
        texto:
          'La medición debe realizarse con total imparcialidad e independencia, el sesgo en los resultados puede resultar dañino para la campaña.',
      },
      {
        img: require('@/assets/curso/t1/f7.svg'),
        texto:
          'La información debe ser clara y comprensible para todo el equipo de la campaña y para los empresarios. La medición debe arrojar recomendaciones y posibles acciones de mejora.',
      },
      {
        img: require('@/assets/curso/t1/f8.svg'),
        texto:
          'En lo posible, realizar varias mediciones que permitan corroborar los datos entre ellas para tomar decisiones eficientes.',
      },
      {
        img: require('@/assets/curso/t1/f9.svg'),
        texto:
          'Las mediciones deben estar pensadas en datos generados por respuestas del público a la comunicación, en cuanto a compresión y a la respuesta generada.',
      },
      {
        img: require('@/assets/curso/t1/f10.svg'),
        texto:
          'La selección de la muestra y el perfil de la misma es primordial para lograr los objetivos propuestos por la medición.',
      },
      {
        img: require('@/assets/curso/t1/f11.svg'),
        texto:
          'La redacción de los cuestionarios es fundamental para el correcto desarrollo de la medición, debe ser muy claro para el público objetivo que haga parte del proceso.',
      },
      {
        img: require('@/assets/curso/t1/f12.svg'),
        texto:
          'Garantizar que el público objetivo que va a ser testeado no tenga conocimiento del proceso que se va a realizar, con el fin de evitar posibles sesgos en la medición.',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
