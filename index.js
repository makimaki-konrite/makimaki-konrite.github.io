window.onload = function() {
    const imageList = [
        'media/gakkimatu.png',
        'media/hanakosann.jpg',
        'media/hoppeha-to.png',
        'media/tanni.png',
        'media/umi.jpg',
        'media/tuki.png',
        'media/wakusei.jpg',
        'media/shuugou.png'
    ];

    function showRandomIllustration() {
        const mainImage = document.getElementById('mainImage');
        const randomIndex = Math.floor(Math.random() * imageList.length);
        const randomImage = imageList[randomIndex];
        mainImage.src = randomImage;
    }

    const randomButton = document.getElementById('randomButton');
    randomButton.addEventListener('click', showRandomIllustration);

    showRandomIllustration();
};

