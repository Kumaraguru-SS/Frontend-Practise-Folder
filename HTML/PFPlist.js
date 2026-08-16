const pfpImages = [
    "Arthur Leywin.jpg",
    "Arthur Leywin-2.jpg",
    "Arthur Leywin-3.jpg",
    "Arthur-4.jpg",
    "Catty.jpg",
    "Cyrene.png",
    "Cyrene-1.JPG",
    "Cyrene-2.JPG",
    "Cyrene-3.JPG",
    "Cyrene-4.JPG",
    "Cyrene-5.JPG",
    "Cyrene-6.JPG",
    "Cyrene-7.JPG",
    "Cyrene-8.JPG",
    "Ezio.avif",
    "Firefly.JPG",
    "Firefly-1.JPG",
    "Firefly-2.JPG",
    "Han Islat.jpg",
    "Han Islat-1.JPG",
    "Han Islat-2.JPG",
    "Hyouka-1.JPG",
    "Hyouka-2.JPG",
    "Kamiki Hikaru.jpg",
    "Neo Cyber.png",
    "Neo Haven Community logo.jpeg",
    "Phainon.png",
    "Phainon-2.jpg",
    "Phainon-3.jpg",
    "Phainon-4.jpg",
    "Phainon-5.jpg",
    "Shadow.jpg",
    "Shadow-1.JPG",
    "Shadow-2.jpg",
    "Sunday.JPG"
];

const gallery = document.getElementById('pfpGallery');

pfpImages.forEach(fileName => {
    const card = document.createElement('div');
    card.className = 'pfp-card';

    const link = document.createElement('a');
    link.className = 'pfp-link';
    link.href = '../../Photo/PFP/' + encodeURIComponent(fileName);
    link.target = '_blank';

    const img = document.createElement('img');
    img.src = link.href;
    img.alt = fileName;
    img.loading = 'lazy';
    img.className = 'pfp-image';

    const label = document.createElement('div');
    label.textContent = fileName;
    label.className = 'pfp-label';

    link.appendChild(img);
    card.appendChild(link);
    card.appendChild(label);
    gallery.appendChild(card);
});