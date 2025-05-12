window.initTagSphere = () => {
    const container = '.tagcloud'
    const texts = [
        "JavaScript",
        "React",
        "Node.js",
        "HTML5",
        "CSS3",
        "MongoDB",
        "Express",
        "Bootstrap",
        "Tailwind",
        "Firebase",
        "MySQL",
        "Git",
        "Docker",
        "Spring Boot",
        "JAVA",
        "AWS",
      ]
    const options = { radius: 180, maxSpeed: 'normal', initSpeed: 'fast', keep: true }
  
    const existing = document.querySelector(container)
    if (existing) existing.innerHTML = ''
    TagCloud(container, texts, options)
  
    const colors = [
        "#008b8b",
        "#7a4210",
        "#304520",
        "#6e6009",
        "#FF69B4",
        "#1E90FF",
        "#FF4500",
        "#32CD32",
        "#8A2BE2",
        "#FF1493",
        "#096c6e",
        "#FF8C00",
        "#20B2AA",
      ]
    const tagItems = document.querySelectorAll('.tagcloud--item')
    tagItems.forEach((item, index) => {
      item.style.color = colors[index % colors.length]
    })
  }
  