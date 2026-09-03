/**
 * National Engineering Services - Main Application Script
 * Client Presentation Demo
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Service Data for Explorer Modal ---
  const servicesData = {
    'steel-structures': {
      title: 'Steel Structures',
      category: 'Industrial & Commercial Fabrication',
      image: 'assets/images/steel_structure_service.jpg',
      desc: 'Heavy-duty engineered structural steel frameworks designed for factories, industrial warehouses, distribution centers, aircraft hangars, and commercial complexes across Pakistan.',
      specs: [
        { label: 'Steel Standard', value: 'ASTM A36 / A572 Grade 50 Equivalent' },
        { label: 'Fabrication', value: 'High-precision CNC cutting, submerged arc welding' },
        { label: 'Surface Protection', value: 'Sandblasted & high-build epoxy zinc-rich primer' },
        { label: 'Spans & Clear Height', value: 'Custom clear-span trusses up to 45+ meters' },
        { label: 'Applications', value: 'Industrial sheds, manufacturing plants, mills, logistics' }
      ]
    },
    'prefab-buildings': {
      title: 'Prefabricated Buildings',
      category: 'Rapid Construction Solutions',
      image: 'assets/images/prefab_building.jpg',
      desc: 'Fast-track prefabricated building solutions incorporating insulated sandwich panels, durable structural frameworks, and turnkey interior finishes for offices, clinics, schools, and accommodation.',
      specs: [
        { label: 'Wall / Roof Panels', value: 'EPS / Rockwool / Polyurethane (PUF) insulated panels' },
        { label: 'Thermal Rating', value: 'Engineered for extreme Pakistani summer & winter climates' },
        { label: 'Construction Speed', value: '60% faster than conventional masonry building' },
        { label: 'Foundation', value: 'Lightweight slab / strip foundation compatible' },
        { label: 'Applications', value: 'Site offices, remote hospitals, worker dormitories, classrooms' }
      ]
    },
    'modular-buildings': {
      title: 'Modular Buildings',
      category: 'Scalable Architecture',
      image: 'assets/images/modular_building_intro.jpg',
      desc: 'Flexible, architecturally refined modular structures engineered for multi-story corporate offices, executive suites, institutional facilities, and modern commercial compounds.',
      specs: [
        { label: 'Structure', value: 'Heavy cold-formed structural steel chassis' },
        { label: 'Configuration', value: 'Single-story or multi-story stackable with exterior staircases' },
        { label: 'Interior Finishes', value: 'Gypsum/PVC wall cladding, premium flooring, LED illumination' },
        { label: 'Relocatable', value: '100% demountable and transportable to new sites' },
        { label: 'Applications', value: 'Corporate headquarters, institutional campuses, retail spaces' }
      ]
    },
    'container-offices': {
      title: 'Container Offices',
      category: 'Portable Workspaces',
      image: 'assets/images/container_office.jpg',
      desc: 'Premium converted ISO shipping containers customized with thermal insulation, double-glazed UPVC windows, electrical wiring, air conditioning provisions, and custom layouts.',
      specs: [
        { label: 'Container Types', value: '20ft and 40ft standard / high-cube units' },
        { label: 'Insulation', value: 'High-density glasswool / PU spray foam' },
        { label: 'Flooring', value: 'Waterproof vinyl / heavy-duty industrial ply + laminate' },
        { label: 'Electrification', value: 'Concealed copper wiring, MCB distribution board, LED lighting' },
        { label: 'Applications', value: 'Project site management, security hubs, portable clinics' }
      ]
    },
    'canopies-shades': {
      title: 'Canopies & Shades',
      category: 'Architectural Outdoor Structures',
      image: 'assets/images/canopy_shade.jpg',
      desc: 'Engineered entrance canopies, pedestrian walkway coverings, and outdoor structural shades fabricated from precision tubular steel and premium durable roofing membranes.',
      specs: [
        { label: 'Framework', value: 'Seamless mild steel pipe / structural box sections' },
        { label: 'Covering', value: 'Tensile PVDF fabric, Polycarbonate, or Prepainted steel' },
        { label: 'Wind Load', value: 'Engineered according to local Pakistani wind speed zones' },
        { label: 'Finishing', value: 'Electrostatic powder coating / polyurethane paint' },
        { label: 'Applications', value: 'Commercial entrances, building drop-offs, event walkways' }
      ]
    },
    'security-gates': {
      title: 'Gates & Security Solutions',
      category: 'Perimeter & Access Control',
      image: 'assets/images/security_gate.jpg',
      desc: 'Heavy-duty industrial sliding gates, cantilever security gates, decorative entrance barriers, and automated perimeter access solutions for factories, estates, and corporate premises.',
      specs: [
        { label: 'Fabrication', value: 'Heavy gauge steel tubing, solid square bars, sheet infills' },
        { label: 'Operation', value: 'Manual glide or automated heavy-duty gear-rack motor ready' },
        { label: 'Corrosion Shield', value: 'Hot-dip galvanized or multi-coat industrial enamel' },
        { label: 'Security Grade', value: 'Anti-climb design, reinforced hinge posts and lock boxes' },
        { label: 'Applications', value: 'Factory perimeters, commercial plazas, residential communities' }
      ]
    },
    'parking-shades': {
      title: 'Parking Shades',
      category: 'Vehicle Protection Systems',
      image: 'assets/images/parking_shade.jpg',
      desc: 'Cantilever and arched steel car parking structures designed to provide reliable shade and thermal protection against intense sunlight, hail, and harsh weather.',
      specs: [
        { label: 'Structure Type', value: 'Cantilever single-pole, double-bay, and pyramid arch' },
        { label: 'Fabric / Roofing', value: 'High-density knitted HDPE shade cloth / PTFE / Corrugated metal' },
        { label: 'UV Blockage', value: 'Up to 95% UV radiation shielding' },
        { label: 'Durability', value: 'Built for 15+ years service life in Pakistani weather' },
        { label: 'Applications', value: 'Corporate parking lots, hospitals, universities, residential' }
      ]
    },
    'gazebos-outdoor': {
      title: 'Gazebos & Outdoor Structures',
      category: 'Landscape & Recreation Fabrication',
      image: 'assets/images/gazebo_outdoor.jpg',
      desc: 'Bespoke steel gazebos, pergolas, and outdoor leisure pavilions fabricated to enhance gardens, recreational facilities, rooftop terraces, and hospitality properties.',
      specs: [
        { label: 'Materials', value: 'Architectural steel profiles, weather-resistant timber accents' },
        { label: 'Roofing Options', value: 'Metal decking, tinted polycarbonate, open pergola louvers' },
        { label: 'Customization', value: 'Custom geometric patterns, integrated benches, lighting' },
        { label: 'Weatherability', value: 'Rust-inhibiting coatings for humid and rainy environments' },
        { label: 'Applications', value: 'Residential lawns, clubs, institutional recreation, farmhouses' }
      ]
    }
  };

  // --- Project Data for Lightbox Modal ---
  const projectsData = {
    'p1': {
      title: 'Custom Steel Structure',
      category: 'Industrial Fabrication',
      image: 'assets/images/hero_steel_structure.jpg',
      location: 'Pakistan',
      desc: 'Design, engineering, and erection of a modern industrial manufacturing shed. Features high-tensile steel framework, heavy crane beams, and insulated corrugated cladding engineered for maximum interior clearance and long-term durability.'
    },
    'p2': {
      title: 'Modern Modular Facility',
      category: 'Modular Construction',
      image: 'assets/images/modular_building_intro.jpg',
      location: 'Pakistan',
      desc: 'Contemporary two-story modular administrative complex installed with panoramic double-glazed acoustic facades, exterior structural steel staircases, and complete electrical/HVAC integration.'
    },
    'p3': {
      title: 'Site Management Container Office',
      category: 'Portable Workspace',
      image: 'assets/images/container_office.jpg',
      location: 'Pakistan',
      desc: 'Converted heavy-duty container workspace equipped with partitioned executive suites, meeting area, sound-dampened acoustic insulation, and weatherproof external enamel finish.'
    },
    'p4': {
      title: 'Commercial Multi-Bay Parking Shade',
      category: 'Cantilever Structure',
      image: 'assets/images/parking_shade.jpg',
      location: 'Pakistan',
      desc: 'Heavy-duty cantilever steel car parking structure providing weather and UV shielding for multiple vehicles. Engineered with clean curved cantilever arms and heavy anchor-bolted foundation bases.'
    },
    'p5': {
      title: 'Rapid-Assembly Prefabricated Building',
      category: 'Prefab Architecture',
      image: 'assets/images/prefab_building.jpg',
      location: 'Pakistan',
      desc: 'Engineered prefabricated facility built with sandwich panel technology and lightweight structural steel. Commissioned in record turnaround time with minimal environmental site disruption.'
    },
    'p6': {
      title: 'Industrial Heavy Entrance Gate',
      category: 'Perimeter & Security',
      image: 'assets/images/security_gate.jpg',
      location: 'Pakistan',
      desc: 'Custom-fabricated motorized sliding steel security gate with overhead gantry and integrated access control channels, finished with anti-rust industrial coatings.'
    }
  };

  // --- Header Scroll Behavior ---
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNav();
  });

  // --- Mobile Menu Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when clicking any link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // --- Smooth Scroll & Active Nav Spy ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // --- Modals Management ---
  const quoteModal = document.getElementById('quoteModal');
  const serviceModal = document.getElementById('serviceModal');
  const projectModal = document.getElementById('projectModal');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Close buttons and backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });

    const closeBtn = backdrop.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeModal(backdrop);
      });
    }
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach(modal => {
        closeModal(modal);
      });
    }
  });

  // --- Quote Triggers ---
  document.querySelectorAll('.btn-quote-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const preselectService = btn.getAttribute('data-service-preselect');
      if (preselectService) {
        const select = document.getElementById('modalProjectType');
        if (select) {
          select.value = preselectService;
        }
      }
      // If service or project modal is open, close it
      closeModal(serviceModal);
      closeModal(projectModal);
      openModal(quoteModal);
    });
  });

  // --- Service Explorer Triggers ---
  document.querySelectorAll('.btn-explore-service').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.getAttribute('data-service-key');
      const data = servicesData[serviceKey];
      if (!data) return;

      document.getElementById('serviceModalTitle').textContent = data.title;
      document.getElementById('serviceModalCategory').textContent = data.category;
      document.getElementById('serviceModalImg').src = data.image;
      document.getElementById('serviceModalImg').alt = data.title;
      document.getElementById('serviceModalDesc').textContent = data.desc;

      // Render specs table
      const tbody = document.getElementById('serviceModalSpecsBody');
      tbody.innerHTML = '';
      data.specs.forEach(spec => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<th>${spec.label}</th><td>${spec.value}</td>`;
        tbody.appendChild(tr);
      });

      // Update CTA preselect
      const serviceCta = document.getElementById('serviceModalQuoteBtn');
      if (serviceCta) {
        serviceCta.setAttribute('data-service-preselect', data.title);
      }

      openModal(serviceModal);
    });
  });

  // --- Project Lightbox Triggers ---
  document.querySelectorAll('.portfolio-card, .btn-view-project').forEach(card => {
    card.addEventListener('click', (e) => {
      // If clicked inside an interactive button with different action, let it handle
      const projectKey = card.getAttribute('data-project-key');
      if (!projectKey) return;
      const data = projectsData[projectKey];
      if (!data) return;

      document.getElementById('projectModalTitle').textContent = data.title;
      document.getElementById('projectModalCategory').textContent = data.category;
      document.getElementById('projectModalImg').src = data.image;
      document.getElementById('projectModalImg').alt = data.title;
      document.getElementById('projectModalDesc').textContent = data.desc;
      document.getElementById('projectModalLocation').textContent = data.location;

      const projectCta = document.getElementById('projectModalQuoteBtn');
      if (projectCta) {
        projectCta.setAttribute('data-service-preselect', data.category.includes('Steel') ? 'Steel Structure' : 'Modular Building');
      }

      openModal(projectModal);
    });
  });

  // --- Toast Notification System ---
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMessage');

  function showToast(message, duration = 4500) {
    if (!toast) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  // --- Form Submissions ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Submitting Inquiry...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast('Thank you! Your quote request has been received. Our engineering team will review your requirements and reach out promptly.');
      }, 1000);
    });
  }

  const modalQuoteForm = document.getElementById('modalQuoteForm');
  if (modalQuoteForm) {
    modalQuoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = modalQuoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Processing Request...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        modalQuoteForm.reset();
        closeModal(quoteModal);
        showToast('Thank you! Your project details have been submitted. Our engineering team will contact you shortly.');
      }, 900);
    });
  }
});
