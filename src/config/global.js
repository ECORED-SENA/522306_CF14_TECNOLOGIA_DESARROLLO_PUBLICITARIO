export default {
  global: {
    componenteFormativo: 'Pre y postest de campaña',
    descripcionCurso:
      'El pretest y el postest hacen parte del control que se realiza a la campaña publicitaria, de acuerdo con el proceso de la comunicación. Este control se lleva a cabo sobre el mensaje, la planeación de las estrategias y los resultados de la campaña.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-principal-bg.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      /*{
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Medición de la campaña publicitaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué se requiere medir la campaña?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Pretest y postest',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'ROI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué es el ROI?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Indicadores KPI',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Cálculo del ROI',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alard, J., y Monford, A. (2017). Plan de comunicación on y off en la práctica. ESIC Editorial.',
    },
    {
      referencia:
        'Ávila, B., y Llamazares, R. F. (2018). Medición de audiencias. TOM micro. Utilidades en la elaboración de un plan de medios. ESIC Editorial.',
    },
    {
      referencia:
        'Dos Santos, M. A. (2017). Investigación de mercados. Ediciones Díaz de Santos.',
    },
    {
      referencia: 'Neuromarketing. (2020). Test fisiológicos.',
      link: 'https://neuromarketing.la/',
    },
    {
      referencia:
        'Rodríguez, I., Suárez, V. A. y García, M. M. (2008). Dirección publicitaria. Editorial UOC.',
    },
    {
      referencia:
        'Soria, M., M. (2015). Plan de medios de comunicación e internet. Editorial CEP.',
    },
    {
      referencia:
        'Turletti, P. (2018). El ROI de marketing y ventas. ESIC Editorial.',
    },
  ],
  glosario: [
    {
      termino: 'Audiencia',
      significado:
        'número de personas expuestas a un medio o a un soporte de comunicación.',
    },
    {
      termino: 'Centrales de medios',
      significado:
        'compañías que compran grandes volúmenes de espacio publicitario a los medios de comunicación y luego los venden a las agencias y anunciantes.',
    },
    {
      termino: 'Investigación postest',
      significado:
        'investigación que se realiza desde el momento de la emisión a la finalización de la misma, al objeto de cuantificar el nivel de consecución de los objetivos publicitarios.',
    },
    {
      termino: 'Investigación pretest',
      significado:
        'investigación realizada con anterioridad a la emisión del anuncio y que pretende evaluar la capacidad que tiene la comunicación para alcanzar los objetivos de la campaña.',
    },
    {
      termino: 'Pupilometría',
      significado:
        'estudio que se tiene sobre los efectos que se producen en la pupila frente a determinados estímulos visuales.',
    },
    {
      termino: 'Target',
      significado: 'público objetivo de una campaña publicitaria.',
    },
    {
      termino: 'Top of Mind',
      significado:
        'primera marca o referencia citada por un consumidor cuando se le pide que indique las marcas que hay en el mercado.',
    },
  ],
  complementario: [],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Manuel Augusto Arias López',
        cargo: 'Instructor – Experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Quindío',
      },
      {
        nombre: 'Andrea Velásquez Torres',
        cargo: 'Apoyo experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Quindío',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Perilla Méndez',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Durán López',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
