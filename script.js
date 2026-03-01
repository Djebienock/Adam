const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Optionnel : animer le hamburger en X ici
});


<section class="hero-element">
    <div class="hero-container">
        <div class="top-badge">Formatrice · Copywriter · Créatrice de contenu</div>
        
        <h1 class="hero-title">
            J'accompagne les <span class="highlight-purple">créateurs</span> à vivre <br>
            de leurs <span class="highlight-blue">compétences</span>
        </h1>

        <div class="hero-visual">
            <img src="ton-image-local.png" alt="Portrait" class="main-photo">
            
            <div class="floating-badge b-copywriting">
                <i class="fas fa-pen-nib"></i> Copywriting
            </div>
            <div class="floating-badge b-ai">
                <i class="fas fa-robot"></i> Intelligence Artificielle
            </div>
            <div class="floating-badge b-monetization">
                <i class="fas fa-chart-line"></i> Monétisation
            </div>
            <div class="floating-badge b-branding">
                <i class="fas fa-globe"></i> Personal Branding
            </div>
            <div class="floating-badge b-content">
                <i class="fas fa-play-circle"></i> Création de contenu
            </div>
        </div>
    </div>

    <div class="marquee-wrapper">
        <div class="marquee-container">
            <div class="marquee-content">
                <span>INTELLIGENCE ARTIFICIELLE</span> <i class="fas fa-star"></i>
                <span>CRÉATION DE CONTENU</span> <i class="fas fa-star"></i>
                <span>MONÉTISATION</span> <i class="fas fa-star"></i>
                <span>CRÉATION DE SITES</span> <i class="fas fa-star"></i>
                <span>PERSONAL BRANDING</span> <i class="fas fa-star"></i>
                <span>SKILLS</span> <i class="fas fa-star"></i>
            </div>
            <div class="marquee-content" aria-hidden="true">
                <span>INTELLIGENCE ARTIFICIELLE</span> <i class="fas fa-star"></i>
                <span>CRÉATION DE CONTENU</span> <i class="fas fa-star"></i>
                <span>MONÉTISATION</span> <i class="fas fa-star"></i>
                <span>CRÉATION DE SITES</span> <i class="fas fa-star"></i>
                <span>PERSONAL BRANDING</span> <i class="fas fa-star"></i>
                <span>SKILLS</span> <i class="fas fa-star"></i>
            </div>
        </div>
    </div>
</section>