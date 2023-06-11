import moment from "moment/moment";

export const cardsData = [
  {
    title: "Revenue",
    change: 24,
    amount: 42056,
  },
  {
    title: "Orders",
    change: -14,
    amount: 52125.03,
  },
  {
    title: "Expenses",
    change: 18,
    amount: 1216.5,
  },
  {
    title: "Profit",
    change: 12,
    amount: 10125.0,
  },
];


export const menuData = [
  {
    link: '/#about',
    section: 'about-us',
    text: 'About us'
  },
  {
    link: '/#offer',
    section: 'offer',
    text: 'What we offer'
  },
  {
    link: '/#contact',
    section: 'contact',
    text: 'Let us contact you'
  },
  {
    link: '/login',
    section: null,
    text: 'Login'
  },

  {
    link: '/register',
    section: null,
    text: 'Register'
  },
  
]

export const offers = [
  {
    tile: 'Minutes',
    body: 'Record discussions and meetings instantaneously.',
    image: 'images/landing/forms.png'
  },
  {
    tile: 'Resources',
    body: 'Teachers can store and share resources between one another such as FATs, worksheets and intervention.',
    image: 'images/landing/resources.png'
  },
  {
    tile: 'Forms',
    body: 'A range of teacher administration relating to learners within a class.',
    image: 'images/landing/forms.png'
  },
  {
    tile: 'Learners',
    body: 'Learner information is captured and secured. Information is transferred when a learner changes schools or progresses to the next grade.',
    image: 'images/landing/learners.png'
  },
  {
    tile: 'Caps',
    body: 'All resources needed by teachers to make their learning meaningful and fun. Never be without your CAPS document again!',
    image: 'images/landing/caps.png'
  },
  
  {
    tile: 'School Admin',
    body: 'Global admin of the school has the rights to add and remove teachers, view learner information of all learners and send notifications to teachers.',
    image: 'images/landing/admin.png'
  },
  {
    tile: 'Notes to Parents',
    body: 'Parent can receive email notifications relating to their child.',
    image: 'images/landing/notes_to_parents.png'
  },
  



  
  
  
  
  
  
]


export const dashboardActions = [
  {
    img:'images/dashboard/home_forms.png',
    position: 1,
    linkTo: '/forms'
  },
  {
    img:'images/dashboard/home_learners.png',
    position: 2,
    linkTo: '/learners'
  },
  {
    img:'images/dashboard/home_caps.png',
    position: 3,
    linkTo: '/caps'
  },
  {
    img:'images/dashboard/home_resources.png',
    position: 5,
    linkTo: '/resources'
  },
  {
    img:'images/dashboard/home_minutes.png',
    position: 5,
    linkTo: '/minutes'
  },
]

export const dashboardForms = [
  {
    position: 1,
    img:'images/dashboard/forms/isp.png',
    linkTo: '/forms/isp'
  },
  {
    position: 2,
    img:'images/dashboard/forms/tracking_forms.png',
    linkTo: '/forms/tracking_forms'
  },
  {
    position: 3,
    img:'images/dashboard/forms/general_observation_sheet.png',
    linkTo: '/forms/general_observation_sheet'
  },
  {
    position: 4,
    img:'images/dashboard/forms/learner_profile.png',
    linkTo: '/forms/learner_profile'
  },
  {
    position: 5,
    img:'images/dashboard/forms/parent_involviment.png',
    linkTo: '/forms/parent_involviment'
  },
  {
    position: 6,
    img:'images/dashboard/forms/sna_form.png',
    linkTo: '/forms/sna-form.png'
  },
  {
    position: 7,
    img:'images/dashboard/forms/school_books.png',
    linkTo: '/forms/school_books'
  },
  {
    position: 7,
    img:'images/dashboard/forms/furniture.png',
    linkTo: '/forms/furniture'
  },
  
]














export const demoCaps = [
  {
    title:"Grade R",
    position: 1,
    img:'images/dashboard/folder.png',
    linkTo: '/forms/isp'

  },
  {
    title: "Grade 1 to 3",
    position: 2,
    img:'images/dashboard/folder.png',
    linkTo: '/forms/tracking_forms'
  },
  {
    title:"Grade 4 to 6",
    position: 3,
    img:'images/dashboard/folder.png',
    linkTo: '/forms/general_observation_sheet'
  },

  {
    title:"Grade 7 to 9",
    position: 5,
    img:'images/dashboard/folder.png',
    linkTo: '/forms/parent_involviment'
  },
  {
    title:"Grade 10 to 12",
    position: 5,
    img:'images/dashboard/folder.png',
    linkTo: '/forms/parent_involviment'
  }
  
]
export const demoCurriculum = [
  {
    id: 1,
    title:"ADMINSTRATION",
    img:'/images/dashboard/folder.png',
    linkTo: '/curriculum/'+1

  },
  {
    id: 2,
    title: "INFORMATION",
    img:'/images/dashboard/folder.png',
    linkTo: '/curriculum/'+2
  },
  {
    id: 3,
    title:"CORRESPONDECE",
    img:'/images/dashboard/folder.png',
    linkTo: '/curriculum/'+3
  }

 
  
]


export const dashboardMenu = [
  // {
  //   title:'Home',
  //   link: 'home',
  //   icon: <svg xmlns="http://www.w3.org/2000/svg" width="28.852" height="33.638" viewBox="0 0 28.852 33.638"><g transform="translate(-4759.148 -141.118)" className="g_color"><path fill="currentColor" d="M4775.122,163.131h-3.1a3.875,3.875,0,0,0-3.875,3.875v7.75h1.55v-7.75a2.328,2.328,0,0,1,2.325-2.325h3.1a2.328,2.328,0,0,1,2.325,2.325v7.75H4779v-7.75A3.875,3.875,0,0,0,4775.122,163.131Z"/><path fill="currentColor" d="M4787.489,154.6l-12.259-12.9a1.831,1.831,0,0,0-1.312-.573,1.812,1.812,0,0,0-1.325.539l-12.9,12.9a1.842,1.842,0,0,0,1.3,3.144h1.345v13.175a3.875,3.875,0,0,0,3.875,3.875h1.937v-1.55h-1.937a2.328,2.328,0,0,1-2.325-2.325V156.156h-2.895a.292.292,0,0,1-.206-.5l12.9-12.9a.291.291,0,0,1,.206-.085.266.266,0,0,1,.211.091l12.26,12.9a.293.293,0,0,1-.212.493h-2.894v14.725a2.328,2.328,0,0,1-2.325,2.325H4779v1.55h1.938a3.875,3.875,0,0,0,3.875-3.875V157.706h1.344a1.841,1.841,0,0,0,1.335-3.11Z"/></g></svg>,
  //   headerTitleImage: 'images/dashboard/home.png'
  // },
  {
    title:'My Class',
    link:'my-class',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28.852" height="33.638" viewBox="0 0 28.852 33.638"><g transform="translate(-4759.148 -141.118)" className="g_color"><path fill="currentColor" d="M4775.122,163.131h-3.1a3.875,3.875,0,0,0-3.875,3.875v7.75h1.55v-7.75a2.328,2.328,0,0,1,2.325-2.325h3.1a2.328,2.328,0,0,1,2.325,2.325v7.75H4779v-7.75A3.875,3.875,0,0,0,4775.122,163.131Z"/><path fill="currentColor" d="M4787.489,154.6l-12.259-12.9a1.831,1.831,0,0,0-1.312-.573,1.812,1.812,0,0,0-1.325.539l-12.9,12.9a1.842,1.842,0,0,0,1.3,3.144h1.345v13.175a3.875,3.875,0,0,0,3.875,3.875h1.937v-1.55h-1.937a2.328,2.328,0,0,1-2.325-2.325V156.156h-2.895a.292.292,0,0,1-.206-.5l12.9-12.9a.291.291,0,0,1,.206-.085.266.266,0,0,1,.211.091l12.26,12.9a.293.293,0,0,1-.212.493h-2.894v14.725a2.328,2.328,0,0,1-2.325,2.325H4779v1.55h1.938a3.875,3.875,0,0,0,3.875-3.875V157.706h1.344a1.841,1.841,0,0,0,1.335-3.11Z"/></g></svg>,
    // icon: <svg xmlns="http://www.w3.org/2000/svg" width="24.946" height="33.548" viewBox="0 0 24.946 33.548"><g transform="translate(-4929.97 -141.026)"><path fill="currentColor" d="M4944.593,142.747v4.3a6.029,6.029,0,0,0,6.022,6.021h2.58v17.2a2.583,2.583,0,0,1-2.58,2.581h-16.344a2.584,2.584,0,0,1-2.581-2.581V145.327a2.583,2.583,0,0,1,2.581-2.58h10.322m1.721-1.721h-12.043a4.3,4.3,0,0,0-4.3,4.3v24.946a4.3,4.3,0,0,0,4.3,4.3h16.344a4.3,4.3,0,0,0,4.3-4.3V151.349h-4.3c-2.376,0,4.3,2.375,4.3,0l-8.6-10.323Z"/><path fill="currentColor" d="M4948.034,157.37h-11.182a.86.86,0,1,1,0-1.72h11.182a.86.86,0,0,1,0,1.72Z"/><path fill="currentColor" d="M4948.034,161.671h-11.182a.86.86,0,1,1,0-1.72h11.182a.86.86,0,0,1,0,1.72Z"/><path fill="currentColor" d="M4948.034,165.972h-11.182a.86.86,0,1,1,0-1.72h11.182a.86.86,0,0,1,0,1.72Z"/></g></svg>,
    headerTitleImage: 'images/dashboard/home.png'
    // headerTitleImage: 'images/dashboard/forms.png'
  },
  {
    title:'Time Table',
    link:'learners',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="43.215" height="33.438" viewBox="0 0 43.215 33.438"><path fill="currentColor"  d="M5140.185,148.394l-20.209-6.737a1.853,1.853,0,0,0-1.193.008l-19.311,6.737a1.846,1.846,0,0,0,0,3.487l3.538,1.234v11.56a.938.938,0,0,0,1.876,0V153.777l.938.328v15.136a2.428,2.428,0,0,0,.067.55c.011.049.03.1.044.142a2.742,2.742,0,0,0,.122.338c1.156,2.689,6.695,4.729,13.367,4.729s12.211-2.04,13.367-4.729a2.912,2.912,0,0,0,.122-.338c.014-.047.033-.093.044-.142a2.428,2.428,0,0,0,.067-.55V154.284l7.161-2.387a1.846,1.846,0,0,0,0-3.5Zm-7.208,3.928-1.829.61-11.757,3.919-11.691-4.045-1.815-.628-1.546-.535c-.027-.012-.056-.019-.084-.029l-4.165-1.441,19.292-6.737,20.209,6.681Zm-1.829,13.995v2.913a.782.782,0,0,1-.039.2c-.187.671-1.275,1.543-3.126,2.272a26.486,26.486,0,0,1-17.118,0c-1.851-.729-2.939-1.6-3.126-2.272a.761.761,0,0,1-.039-.2V154.759l11.082,3.866a1.841,1.841,0,0,0,.61.1,1.869,1.869,0,0,0,.583-.094l11.173-3.725Z" transform="translate(-5098.233 -141.562)"/></svg>,
    headerTitleImage: 'images/dashboard/learners.png'
  },
  // {
  //   title:'Parents',
  //   link:'parents',
  //   icon:<svg xmlns="http://www.w3.org/2000/svg" width="33.724" height="33.724" viewBox="0 0 33.724 33.724"><path fill="currentColor" d="M1381.4,44.987a16.862,16.862,0,1,0,16.862,16.862A16.881,16.881,0,0,0,1381.4,44.987Zm-3.447,17.972a6.184,6.184,0,0,1,5.471,3.778,6.647,6.647,0,0,0-1.883,3.916,7.245,7.245,0,0,0-.056.893c0,.142,0,.285.014.435l-.038-.031.069.544c.058.454.1.78.167,1.1a12.857,12.857,0,0,1-9.605-.852,8.313,8.313,0,0,1-.385-2.493,8.482,8.482,0,0,1,.132-1.492C1372.432,65.449,1374.949,62.959,1377.954,62.959Zm-4.164-6.246a4.164,4.164,0,1,1,4.164,4.164A4.168,4.168,0,0,1,1373.79,56.714Zm10.89,5.862a2.543,2.543,0,1,1,2.543,2.543A2.546,2.546,0,0,1,1384.681,62.576Zm2.543,4.357a4.036,4.036,0,0,1,3.737,3.21,5.313,5.313,0,0,1-.032,2.9,8.323,8.323,0,0,1-7.41,0c-.015-.049-.025-.1-.039-.15a5.282,5.282,0,0,1-.18-1.351,5.425,5.425,0,0,1,.084-.951,4.992,4.992,0,0,1,.687-1.79,4.1,4.1,0,0,1,1.766-1.569A3.374,3.374,0,0,1,1387.224,66.933ZM1381.4,76.76a14.864,14.864,0,0,1-3.959-.538c.17.006.341.01.512.01a15.068,15.068,0,0,0,4.2-.6,14.821,14.821,0,0,0,1.536-.538c.23.085.463.165.7.233a10.288,10.288,0,0,0,2.468.4A14.826,14.826,0,0,1,1381.4,76.76Zm11.554-5.5a7.18,7.18,0,0,0-.137-1.147h0A6.357,6.357,0,0,0,1390,65.929a4.356,4.356,0,1,0-7.135-3.353c0,.042,0,.083,0,.124a8.245,8.245,0,0,0-1.313-.89,6.246,6.246,0,1,0-7.206,0,9.354,9.354,0,0,0-4.643,7.129,10.568,10.568,0,0,0-.081,1.307c0,.261.013.519.032.775a14.909,14.909,0,1,1,23.3.241Z" transform="translate(-1364.539 -44.987)"/></svg>,
  //   headerTitleImage: 'images/dashboard/parents.png'
  // },
  {
    title:'Caps',
    link:'caps',
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="26.549" height="33.725" viewBox="0 0 26.549 33.725"><g transform="translate(-5543.51 -141.275)"><path fill="currentColor"  d="M5566.471,141.275h-13.633a3.584,3.584,0,0,0-3.522,2.936,3.586,3.586,0,0,1,.652-.066H5563.6a3.588,3.588,0,0,1,3.588,3.588v20.091a3.579,3.579,0,0,1-.066.652,3.584,3.584,0,0,0,2.936-3.522V144.863A3.587,3.587,0,0,0,5566.471,141.275Z"/><path fill="currentColor"  d="M5563.6,144.145h-13.633a3.626,3.626,0,0,0-3.522,2.936,3.591,3.591,0,0,1,.651-.066h10.046l7.176,8.611V171.34a3.636,3.636,0,0,0,2.87-3.516V147.733A3.588,3.588,0,0,0,5563.6,144.145Z"/><path fill="currentColor"  d="M5557.143,147.015H5547.1a3.626,3.626,0,0,0-3.587,3.588v20.809A3.588,3.588,0,0,0,5547.1,175h13.634a3.588,3.588,0,0,0,3.588-3.588V155.626Zm5.741,24.4a2.156,2.156,0,0,1-2.153,2.153H5547.1a2.155,2.155,0,0,1-2.152-2.153V150.6a2.149,2.149,0,0,1,1.435-2.02,2.113,2.113,0,0,1,.717-.132h8.611v3.587a5.028,5.028,0,0,0,5.023,5.023h2.153v14.351Z"/><path fill="currentColor"  d="M5558.578,159.214h-9.328a.717.717,0,0,0,0,1.435h9.328a.717.717,0,1,0,0-1.435Z"/><path fill="currentColor"  d="M5558.578,162.8h-9.328a.717.717,0,0,0,0,1.435h9.328a.717.717,0,1,0,0-1.435Z"/><path fill="currentColor"  d="M5558.578,166.389h-9.328a.717.717,0,0,0,0,1.435h9.328a.717.717,0,1,0,0-1.435Z"/></g></svg>,
    headerTitleImage: 'images/dashboard/caps.png'
  },
  // {
  //   title:'Curriculum',
  //   link:'resources',
  //   icon:<svg xmlns="http://www.w3.org/2000/svg" width="24.632" height="34.077" viewBox="0 0 24.632 34.077"><g transform="translate(-5683.577 -140.923)"><path fill="currentColor" d="M5704.269,143.287h-.394v1.577h.394a2.367,2.367,0,0,1,2.364,2.364v22.066a2.367,2.367,0,0,1-2.364,2.364H5697.3v1.577h6.971a3.941,3.941,0,0,0,3.94-3.941V147.228A3.941,3.941,0,0,0,5704.269,143.287Z"/><path fill="currentColor" d="M5687.053,170.008v.074h-1.619a3.941,3.941,0,0,0,3.861,3.153h.122v-1.577h-.122A2.359,2.359,0,0,1,5687.053,170.008Z"/><path fill="currentColor" d="M5686.931,160.625v-13.4a2.366,2.366,0,0,1,2.364-2.364h.394v-1.577h-.394a3.941,3.941,0,0,0-3.94,3.941v13.4h1.576Z"/><path fill="currentColor" d="M5691.659,154.321H5701.9a.788.788,0,0,0,0-1.577h-10.245a.788.788,0,0,0,0,1.577Z"/><path fill="currentColor" d="M5691.659,158.261H5701.9a.788.788,0,1,0,0-1.576h-10.245a.788.788,0,1,0,0,1.576Z"/><path fill="currentColor" d="M5691.659,162.2H5701.9a.788.788,0,1,0,0-1.576h-10.245a.788.788,0,1,0,0,1.576Z"/><path fill="currentColor" d="M5696.178,174.023l-.188-.788-.154-.646-.033-.142-.188-.789-.188-.788-.057-.243c0-.014-.017-.02-.022-.033a.318.318,0,0,0-.073-.139l-7.648-8.092a2.154,2.154,0,0,0-.574-.421c-.041-.021-.08-.048-.122-.067a2.163,2.163,0,0,0-.789-.178c-.026,0-.053-.008-.08-.008a2.18,2.18,0,0,0-1.374.507c-.034.029-.071.051-.1.082l-.333.315a2.151,2.151,0,0,0-.086,3.042l.523.554.667.705.787.834.789.834.122.129,2.364,2.5.441.466.745.789.745.788.415.439c.01.011.025.015.036.025a.348.348,0,0,0,.18.132l.642.192,1.291.385,1.933.576a.35.35,0,0,0,.1.016.365.365,0,0,0,.353-.449Zm-4.9-3.153-4.229-4.474-.122-.129-.789-.834-.787-.834-.045-.046a.577.577,0,0,1,.023-.815l.022-.02.312-.295a.565.565,0,0,1,.4-.157.614.614,0,0,1,.08,0,.573.573,0,0,1,.339.175l.45.475.122.13,6.216,6.576-.257.243-.834.788h-.151Z"/><path fill="currentColor" d="M5692.841,145.652h7.881a1.577,1.577,0,0,0,0-3.153H5699a2.351,2.351,0,0,0-4.439,0h-1.721a1.577,1.577,0,0,0,0,3.153Z"/></g></svg>,
  //   headerTitleImage: 'images/dashboard/resources.png'
  // },
  // {
  //   title:'Minutes',
  //   link:'minutes',
  //   icon:<svg xmlns="http://www.w3.org/2000/svg" width="26.908" height="34.253" viewBox="0 0 26.908 34.253"><g transform="translate(-5887 -140.819)"><path fill="currentColor" d="M5908.317,163.391h-6.882V156.51a.86.86,0,0,0-1.72,0v7.742a.86.86,0,0,0,.86.86h7.742a.86.86,0,0,0,0-1.721Z"/><path fill="currentColor" d="M5900.454,148.164a13.454,13.454,0,1,0,13.454,13.454A13.454,13.454,0,0,0,5900.454,148.164Zm0,25.052a11.6,11.6,0,1,1,11.6-11.6A11.611,11.611,0,0,1,5900.454,173.216Z"/><path fill="currentColor" d="M5893.93,146.065h.04l11.478-.176c.025,0,.039-.023.063-.027s.039.025.063.025a.386.386,0,0,0,.2-.056l1.842-1.1,1.841-1.1a.388.388,0,0,0-.01-.672l-1.875-1.044-1.874-1.045a.385.385,0,0,0-.188-.049c-.009,0-.015.009-.024.009s-.013-.009-.022-.009h-.006l-11.564.178a2.534,2.534,0,0,0,.038,5.068Zm10.08-3.367.021,1.356-10.1.155a.679.679,0,0,1-.01-1.357Z"/></g></svg>,
  //   headerTitleImage: 'images/dashboard/minutes.png'
  // },
  {
    title:'Calender',
    link:'calender',
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="31" height="34.206" viewBox="0 0 31 34.206"><g transform="translate(-6070.272 -140.794)"><path fill="currentColor" d="M6095.927,144h-1.069v-2.138a1.069,1.069,0,0,0-2.138,0V144h-13.9v-2.138a1.069,1.069,0,0,0-2.138,0V144h-1.069a5.345,5.345,0,0,0-5.345,5.345v20.31a5.345,5.345,0,0,0,5.345,5.345h20.31a5.345,5.345,0,0,0,5.345-5.345v-20.31A5.345,5.345,0,0,0,6095.927,144Zm0,28.862h-20.31a3.21,3.21,0,0,1-3.207-3.207v-17.1h26.724v17.1A3.211,3.211,0,0,1,6095.927,172.862Zm-23.517-23.517a3.21,3.21,0,0,1,3.207-3.207h1.069v1.069a1.069,1.069,0,0,0,2.138,0v-1.069h13.9v1.069a1.069,1.069,0,1,0,2.138,0v-1.069h1.069a3.211,3.211,0,0,1,3.207,3.207v1.069H6072.41Z"/><path fill="currentColor" d="M6079.573,156.865h-3.956a1.069,1.069,0,1,0,0,2.138h3.956a1.069,1.069,0,0,0,0-2.138Z"/><path fill="currentColor" d="M6087.75,156.865h-3.956a1.069,1.069,0,0,0,0,2.138h3.956a1.069,1.069,0,0,0,0-2.138Z"/><path fill="currentColor" d="M6095.927,156.865h-3.957a1.069,1.069,0,0,0,0,2.138h3.957a1.069,1.069,0,1,0,0-2.138Z"/><path fill="currentColor" d="M6079.573,161.943h-3.956a1.069,1.069,0,1,0,0,2.138h3.956a1.069,1.069,0,0,0,0-2.138Z"/><path fill="currentColor" d="M6087.75,161.943h-3.956a1.069,1.069,0,0,0,0,2.138h3.956a1.069,1.069,0,0,0,0-2.138Z"/><path fill="currentColor" d="M6095.927,161.943h-3.957a1.069,1.069,0,0,0,0,2.138h3.957a1.069,1.069,0,1,0,0-2.138Z"/><path fill="currentColor" d="M6079.573,167.02h-3.956a1.069,1.069,0,1,0,0,2.138h3.956a1.069,1.069,0,0,0,0-2.138Z"/><path fill="currentColor" d="M6087.75,167.02h-3.956a1.069,1.069,0,0,0,0,2.138h3.956a1.069,1.069,0,0,0,0-2.138Z"/><path fill="currentColor" d="M6095.927,167.02h-3.957a1.069,1.069,0,0,0,0,2.138h3.957a1.069,1.069,0,1,0,0-2.138Z"/></g></svg>,
    headerTitleImage: 'images/dashboard/calender.png'
  },
  {
    title:'',
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="45.574" height="34.007" viewBox="0 0 45.574 34.007"><g transform="translate(6408 175) rotate(180)"><path fill="currentColor" d="M6384.547,156.824h-18.118l5.461-5.461a1.173,1.173,0,1,0-1.658-1.659l-7.463,7.463a1.173,1.173,0,0,0,0,1.659l7.463,7.462a1.172,1.172,0,1,0,1.658-1.658l-5.461-5.461h18.118a1.173,1.173,0,0,0,0-2.345Z"/><path fill="currentColor" d="M6402.137,140.993h-22.281a5.863,5.863,0,0,0-5.863,5.863v.586a1.172,1.172,0,1,0,2.345,0v-.586a3.522,3.522,0,0,1,3.518-3.518h22.281a3.521,3.521,0,0,1,3.518,3.518v22.281a3.522,3.522,0,0,1-3.518,3.518h-22.281a3.523,3.523,0,0,1-3.518-3.518v-2.932a1.172,1.172,0,1,0-2.345,0v2.932a5.863,5.863,0,0,0,5.863,5.863h22.281a5.863,5.863,0,0,0,5.863-5.863V146.856A5.863,5.863,0,0,0,6402.137,140.993Z"/></g></svg>,
    headerTitleImage: 'images/dashboard/forms.png',
  },
]


//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};


//* calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Lunch Pary',
    start: todayStr + 'T09:00:00',

  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Payment Shedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}


// * tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Database Setup",
          description: "Firebase Integration"
        },
        {
          id: 2,
          title: "Data Flow",
          description: "Setup Diagram with other developers"
        },
      ]
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Data Table Page",
          description: "Server side Pagination",
        }
      ]
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Full Calendar Extension",
          description: "Make new events and store in global states"
        },
        {
          id: 11,
          title: "Custom Kanban Board",
          description: "Setup react-kanban dep within Dashboard as seperate page"
        }
      ]
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Vite Server Setup",
          description: "Configure required modules and starters"
        },
        {
          id: 13,
          title: "Modular structre",
          description: "Write css in form of modules to reduce the naming conflicts"
        }
      ]
    }
  ]
}


// * user table data
export const userData = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  }, {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
]