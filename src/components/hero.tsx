const Hero =() => {
    return(
        <div>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The Green Essence of Life
      </h1>
      <p className="mb-8 leading-relaxed font-bold font-serif">
Plants are the foundation of nature’s beauty and the silent caretakers of our world. Their greenery adds a refreshing calm to any landscape, embodying peace, growth, and vitality. Every plant, whether it’s a sprawling tree or a delicate fern, is a reminder of nature’s resilience and grace. They transform barren spaces into lush, vibrant havens, inspiring a sense of harmony and connection to the natural world. Each leaf, stem, and flower tells a story of growth, adaptability, and the quiet beauty that sustains all life on Earth.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">See more</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="hero.avif"/>
    </div>
  </div>
</section>
        </div>
    )
}

export default Hero;
