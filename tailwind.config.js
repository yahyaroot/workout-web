module.exports = {
  mode:'jit',
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

   
      colors: {
        primary:'#25AB75',
        yellowTime:'#FFE642',
        redCalories:'#FB1351'

    },
    zIndex:{
      '-10':'-10'
    },

    maxHeight:{
      'heroImage':'45rem'
    },
    
    fontSize:{
     '1l':['16px',{

      letterSpacing:'0.5px',
      lineHeight:'29px'
     }]
      ,
      '10xl':['12.5rem',{
        letterSpacing:'-2px',
        lineHeight:'170px'
      }],

      'time':['2.5rem',{
        letterSpacing:'1px',
        lineHeight:'40px'
      }],

      
      'popular':['2.18rem',{
        letterSpacing:'0.3px',
        lineHeight:'45px'
      }],
     
      'seemore':['12px',{
        letterSpacing:'1.5px',
        lineHeight:'12px'
      }], 

          'treadmill':['50px',{
        letterSpacing:'0.3px',
        lineHeight:'45px'
      }], 

      'timePopular':['20px',{
        letterSpacing:'1.37px',
        lineHeight:'19px'
      }], 

      'caloriesPopular':['13px',{
        letterSpacing:'0.5px',
        lineHeight:'14px'
      }],
      
      'workoutProgram':['8.5rem',{
        letterSpacing:'1px',
        lineHeight:'120px'
      }],
      'loremProgram':['25px',{
        letterSpacing:'0.5px',
        lineHeight:'50px'
      }],


      'buttonGetStared':['18px',{
        letterSpacing:'1px',
        lineHeight:'22px'
      }],

      'coach':['20px',{
        letterSpacing:'0.5px',
        lineHeight:'25px'
      }],

      'coachChild':['14px',{
        letterSpacing:'0.5px',
        lineHeight:'14px'
      }],

      
      'listNo':['25px',{
        letterSpacing:'0px',
        lineHeight:'35px'
      }],

      'listJenis':['50px',{
        letterSpacing:'0.83px',
        lineHeight:'70px'
      }],







  

    },
   

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}