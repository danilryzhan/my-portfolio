module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage:  {
        'home-background': "url('/public/1f736040a3868b98c8c4fb9146a7b955.gif')",
        'about-background': "url('/public/25cff3f5430c7e67a83823bfbc43f86a.gif')",
        'footer-texture': "url('/img/footer-texture.png')",
        
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'day': '#f8f1db',
        'midnight': '#3f5aaf',
        'light-red':'#fcf2f2',
       })
    },
  
    colors: {
    
    },
  },
  plugins: [],
}