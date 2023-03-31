module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage:  {
        'home-background': "url('/public/2f10ce69b96c0611989308b0abc68e70.gif')",
        'about-background': "url('/public/2f10ce69b96c0611989308b0abc68e70.gif')",
        'experience-background': "url('/public/745cc90fcc688569610f84bc5d2b2fd6.gif')",
        'portfolio-background': "url('/public/b39c0c466fa2e880bcf8b904305041aa.gif')",
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
        'form-bg':'rgb(248 241 219 / 1)',
       })
    },
  
    colors: {
    
    },
  },
  plugins: [],
}