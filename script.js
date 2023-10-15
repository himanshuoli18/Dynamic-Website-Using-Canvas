function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       Assets/male0001.png
       Assets/male0002.png
       Assets/male0003.png
       Assets/male0004.png
       Assets/male0005.png
       Assets/male0006.png
       Assets/male0007.png
       Assets/male0008.png
       Assets/male0009.png
       Assets/male0010.png
       Assets/male0011.png
       Assets/male0012.png
       Assets/male0013.png
       Assets/male0014.png
       Assets/male0015.png
       Assets/male0016.png
       Assets/male0017.png
       Assets/male0018.png
       Assets/male0019.png
       Assets/male0020.png
       Assets/male0021.png
       Assets/male0022.png
       Assets/male0023.png
       Assets/male0024.png
       Assets/male0025.png
       Assets/male0026.png
       Assets/male0027.png
       Assets/male0028.png
       Assets/male0029.png
       Assets/male0030.png
       Assets/male0031.png
       Assets/male0032.png
       Assets/male0033.png
       Assets/male0034.png
       Assets/male0035.png
       Assets/male0036.png
       Assets/male0037.png
       Assets/male0038.png
       Assets/male0039.png
       Assets/male0040.png
       Assets/male0041.png
       Assets/male0042.png
       Assets/male0043.png
       Assets/male0044.png
       Assets/male0045.png
       Assets/male0046.png
       Assets/male0047.png
       Assets/male0048.png
       Assets/male0049.png
       Assets/male0050.png
       Assets/male0051.png
       Assets/male0052.png
       Assets/male0053.png
       Assets/male0054.png
       Assets/male0055.png
       Assets/male0056.png
       Assets/male0057.png
       Assets/male0058.png
       Assets/male0059.png
       Assets/male0060.png
       Assets/male0061.png
       Assets/male0062.png
       Assets/male0063.png
       Assets/male0064.png
       Assets/male0065.png
       Assets/male0066.png
       Assets/male0067.png
       Assets/male0068.png
       Assets/male0069.png
       Assets/male0070.png
       Assets/male0071.png
       Assets/male0072.png
       Assets/male0073.png
       Assets/male0074.png
       Assets/male0075.png
       Assets/male0076.png
       Assets/male0077.png
       Assets/male0078.png
       Assets/male0079.png
       Assets/male0080.png
       Assets/male0081.png
       Assets/male0082.png
       Assets/male0083.png
       Assets/male0084.png
       Assets/male0085.png
       Assets/male0086.png
       Assets/male0087.png
       Assets/male0088.png
       Assets/male0089.png
       Assets/male0090.png
       Assets/male0091.png
       Assets/male0092.png
       Assets/male0093.png
       Assets/male0094.png
       Assets/male0095.png
       Assets/male0096.png
       Assets/male0097.png
       Assets/male0098.png
       Assets/male0099.png
       Assets/male0100.png
       Assets/male0101.png
       Assets/male0102.png
       Assets/male0103.png
       Assets/male0104.png
       Assets/male0105.png
       Assets/male0106.png
       Assets/male0107.png
       Assets/male0108.png
       Assets/male0109.png
       Assets/male0110.png
       Assets/male0111.png
       Assets/male0112.png
       Assets/male0113.png
       Assets/male0114.png
       Assets/male0115.png
       Assets/male0116.png
       Assets/male0117.png
       Assets/male0118.png
       Assets/male0119.png
       Assets/male0120.png
       Assets/male0121.png
       Assets/male0122.png
       Assets/male0123.png
       Assets/male0124.png
       Assets/male0125.png
       Assets/male0126.png
       Assets/male0127.png
       Assets/male0128.png
       Assets/male0129.png
       Assets/male0130.png
       Assets/male0131.png
       Assets/male0132.png
       Assets/male0133.png
       Assets/male0134.png
       Assets/male0135.png
       Assets/male0136.png
       Assets/male0137.png
       Assets/male0138.png
       Assets/male0139.png
       Assets/male0140.png
       Assets/male0141.png
       Assets/male0142.png
       Assets/male0143.png
       Assets/male0144.png
       Assets/male0145.png
       Assets/male0146.png
       Assets/male0147.png
       Assets/male0148.png
       Assets/male0149.png
       Assets/male0150.png
       Assets/male0151.png
       Assets/male0152.png
       Assets/male0153.png
       Assets/male0154.png
       Assets/male0155.png
       Assets/male0156.png
       Assets/male0157.png
       Assets/male0158.png
       Assets/male0159.png
       Assets/male0160.png
       Assets/male0161.png
       Assets/male0162.png
       Assets/male0163.png
       Assets/male0164.png
       Assets/male0165.png
       Assets/male0166.png
       Assets/male0167.png
       Assets/male0168.png
       Assets/male0169.png
       Assets/male0170.png
       Assets/male0171.png
       Assets/male0172.png
       Assets/male0173.png
       Assets/male0174.png
       Assets/male0175.png
       Assets/male0176.png
       Assets/male0177.png
       Assets/male0178.png
       Assets/male0179.png
       Assets/male0180.png
       Assets/male0181.png
       Assets/male0182.png
       Assets/male0183.png
       Assets/male0184.png
       Assets/male0185.png
       Assets/male0186.png
       Assets/male0187.png
       Assets/male0188.png
       Assets/male0189.png
       Assets/male0190.png
       Assets/male0191.png
       Assets/male0192.png
       Assets/male0193.png
       Assets/male0194.png
       Assets/male0195.png
       Assets/male0196.png
       Assets/male0197.png
       Assets/male0198.png
       Assets/male0199.png
       Assets/male0200.png
       Assets/male0201.png
       Assets/male0202.png
       Assets/male0203.png
       Assets/male0204.png
       Assets/male0205.png
       Assets/male0206.png
       Assets/male0207.png
       Assets/male0208.png
       Assets/male0209.png
       Assets/male0210.png
       Assets/male0211.png
       Assets/male0212.png
       Assets/male0213.png
       Assets/male0214.png
       Assets/male0215.png
       Assets/male0216.png
       Assets/male0217.png
       Assets/male0218.png
       Assets/male0219.png
       Assets/male0220.png
       Assets/male0221.png
       Assets/male0222.png
       Assets/male0223.png
       Assets/male0224.png
       Assets/male0225.png
       Assets/male0226.png
       Assets/male0227.png
       Assets/male0228.png
       Assets/male0229.png
       Assets/male0230.png
       Assets/male0231.png
       Assets/male0232.png
       Assets/male0233.png
       Assets/male0234.png
       Assets/male0235.png
       Assets/male0236.png
       Assets/male0237.png
       Assets/male0238.png
       Assets/male0239.png
       Assets/male0240.png
       Assets/male0241.png
       Assets/male0242.png
       Assets/male0243.png
       Assets/male0244.png
       Assets/male0245.png
       Assets/male0246.png
       Assets/male0247.png
       Assets/male0248.png
       Assets/male0249.png
       Assets/male0250.png
       Assets/male0251.png
       Assets/male0252.png
       Assets/male0253.png
       Assets/male0254.png
       Assets/male0255.png
       Assets/male0256.png
       Assets/male0257.png
       Assets/male0258.png
       Assets/male0259.png
       Assets/male0260.png
       Assets/male0261.png
       Assets/male0262.png
       Assets/male0263.png
       Assets/male0264.png
       Assets/male0265.png
       Assets/male0266.png
       Assets/male0267.png
       Assets/male0268.png
       Assets/male0269.png
       Assets/male0270.png
       Assets/male0271.png
       Assets/male0272.png
       Assets/male0273.png
       Assets/male0274.png
       Assets/male0275.png
       Assets/male0276.png
       Assets/male0277.png
       Assets/male0278.png
       Assets/male0279.png
       Assets/male0280.png
       Assets/male0281.png
       Assets/male0282.png
       Assets/male0283.png
       Assets/male0284.png
       Assets/male0285.png
       Assets/male0286.png
       Assets/male0287.png
       Assets/male0288.png
       Assets/male0289.png
       Assets/male0290.png
       Assets/male0291.png
       Assets/male0292.png
       Assets/male0293.png
       Assets/male0294.png
       Assets/male0295.png
       Assets/male0296.png
       Assets/male0297.png
       Assets/male0298.png
       Assets/male0299.png
       Assets/male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })