const data = [
  {
    active: true,
    id: 'neurologic',
    title: 'Neurologic<sup>9</sup>',
    word: 'Neurologic',
    icon: '/assets/images/hpp-profile/skeleton/neurologic-icon-active.svg',
    text: 'Fatigue, headaches, sleep disturbances, neuropathy, and hearing loss',
    image1: '/assets/images/hpp-profile/skeleton/neurologic-img.png',
    imageAlt1: 'Neurologic image',
    image2: '',
    imageAlt2: '',
    condition: '',
    type: 'adults'
  },
  {
    active: true,
    id: 'neurologic--infants',
    title: 'Neurologic<sup>3,6,9*</sup>',
    word: 'Neurologic',
    icon: '/assets/images/hpp-profile/skeleton/neurologic-icon-active.svg',
    text: 'Headache, sleep disturbance, and seizures',
    image1: '/assets/images/hpp-profile/skeleton/neurologic-img--infants.png',
    imageAlt1: 'Neurologic image',
    image2: '',
    imageAlt2: '',
    condition: '<p>*Vitamin B<sub>6</sub>–responsive seizures are most commonly reported in infants.</p>',
    type: 'infants'
  },
  {
    active: false,
    id: 'dental',
    title: 'Dental<sup>1,9</sup>',
    word: 'Dental',
    icon: '/assets/images/hpp-profile/skeleton/dental-icon-active.svg',
    text: 'Adult tooth loss, abnormal dentition, and periodontal disease',
    image1: '/assets/images/hpp-profile/skeleton/dental-img.png',
    imageAlt1: 'Dental x-ray one',
    image2: '',
    imageAlt2: '',
    condition:
            '<p>Periodontal disease particularly in the anterior region in a 27-year-old adult.</p> <p>Reproduced with permission from Bloch-Zupan A. <em>Int Jour Paedtr Dent.</em>2016;26:426-438.</p>',
    type: 'adults'
  },
  {
    active: false,
    id: 'dental--infants',
    title: 'Dental<sup>9,10</sup>',
    word: 'Dental',
    icon: '/assets/images/hpp-profile/skeleton/dental-icon-active.svg',
    text: 'Premature or nontraumatic tooth loss with root intact and caries',
    image1: '/assets/images/hpp-profile/skeleton/dental-xray-one.png',
    imageAlt1: 'Dental x-ray one',
    image2: '',
    imageAlt2: '',
    condition:
            '<p>Radiograph shows changes in the shape of the crowns and enlarged pulp chambers.</p><p>Reproduced with permission from Reibel A. et al. <em>Orphanet J. Rare Dis.</em> 2009:4-6</p>',
    type: 'infants'
  },
  {
    active: false,
    id: 'muscular',
    title: 'Muscular<sup>9,19</sup>',
    word: 'Muscular',
    icon: '/assets/images/hpp-profile/skeleton/muscular-icon-active.svg',
    text: 'Muscle pain and weakness, muscular hypotonia, reduced grip force, history of abnormal gait, immobility, and tendon calcification',
    image1: '/assets/images/hpp-profile/skeleton/muscular-img.png',
    imageAlt1: 'Muscular image',
    image2: '',
    imageAlt2: '',
    condition: '<p>Reduced grip force assessed by digital hand dynamometer.</p> <p>Reproduced with permission from Jandl NM, et al. <em>Calcif Tissue Int.</em> 2021;108(3):288-301.</p>',
    type: 'adults'
  },
  {
    active: false,
    id: 'muscular--infants',
    word: 'Muscular',
    title: 'Muscular<sup>3,11</sup>',
    icon: '/assets/images/hpp-profile/skeleton/muscular-icon-active.svg',
    text: 'Muscular hypotonia, muscular/joint pain, waddling gait, and muscular fatigue',
    image1: '/assets/images/hpp-profile/skeleton/muscular-img--infants.png',
    imageAlt1: 'Muscular image',
    image2: '',
    imageAlt2: '',
    condition: '<p>Pediatric patients with HPP may use assistive devices due to difficulty walking.</p>',
    type: 'infants'
  },
  {
    active: false,
    id: 'respiratory--infants',
    title: 'Respiratory<sup>9</sup>',
    word: 'Respiratory',
    icon: '/assets/images/hpp-profile/skeleton/respiratory-icon-active.svg',
    text: 'History of respiratory support',
    image1: '/assets/images/hpp-profile/skeleton/respiratory-img.png',
    imageAlt1: 'Respiratory image',
    image2: '',
    imageAlt2: '',
    condition: ' <p>“Bell-shape” configuration of the soft thorax will predispose to respiratory disease.</p> <p>Reproduced with permission from Whyte MP. Hypophosphatasia: nature’s window on alkaline phosphatase function in humans. In: <em>Principles of Bone Biology.</em> 3rd ed. Academic Press; 2008:1573-1598.</p>',
    type: 'infants'
  },
  {
    active: false,
    id: 'rheumatic',
    title: 'Rheumatic<sup>1,6,10</sup>',
    word: 'Rheumatic',
    icon: '/assets/images/hpp-profile/skeleton/rheumatic-icon-active.svg',
    text: 'Calcific periarthritis, chondrocalcinosis, pain, pseudogout, and osteoarthropathy',
    image1: '/assets/images/hpp-profile/skeleton/rheumatic-img.png',
    imageAlt1: 'Rheumatic image',
    image2: '',
    imageAlt2: '',
    condition:
            '<p>Radiograph of right knee demonstrating meniscal chondrocalcinosis. </p> <p> Reproduced with permission from MacMullan P and McCarthy G. <em>Ther Adv Musculoskel Dis.</em> 2012;4(2):121-131.</p>',
    type: 'adults'
  },
  {
    active: false,
    id: 'rheumatic--infants',
    title: 'Rheumatic<sup>9,12</sup>',
    word: 'Rheumatic',
    icon: '/assets/images/hpp-profile/skeleton/rheumatic-icon-active.svg',
    text: 'Pain, joint discomfort, and swelling',
    image1: '/assets/images/hpp-profile/skeleton/rheumatic-img--infants.png',
    imageAlt1: 'Rheumatic image',
    image2: '',
    imageAlt2: '',
    condition:
            '',
    type: 'infants'
  },
  {
    active: false,
    id: 'renal',
    title: 'Renal<sup>3,6,10</sup>',
    word: 'Renal',
    icon: '/assets/images/hpp-profile/skeleton/renal-icon-active.svg',
    text: 'History of hypercalcemia, hyperphosphatemia, kidney stones, and nephrocalcinosis',
    image1: '/assets/images/hpp-profile/skeleton/renal-img.png',
    imageAlt1: 'Renal image',
    image2: '',
    imageAlt2: '',
    condition: '',
    type: 'adults'
  },
  {
    active: false,
    id: 'renal--infants',
    title: 'Renal<sup>9,11,13</sup>',
    word: 'Renal',
    icon: '/assets/images/hpp-profile/skeleton/renal-icon-active.svg',
    text: 'Hypercalcemia, nephrocalcinosis, and hypercalciuria',
    image1: '/assets/images/hpp-profile/skeleton/renal-img--infants.png',
    imageAlt1: 'Renal image',
    image2: '',
    imageAlt2: '',
    condition: '<p>Renal ultrasound demonstrating nephrocalcinosis (arrows).</p><p>Reproduced with permission from Mohn A, et al. <em>Acta Paediatrica.</em> 100(7), e43-e46.</p>',
    type: 'infants'
  },
  {
    active: false,
    id: 'orthopedic',
    title: 'Orthopedic/skeletal<sup>1,3,6,10,13</sup>',
    word: 'Orthopedic/ Skeletal',
    icon: '/assets/images/hpp-profile/skeleton/orthopedic-icon-active.svg',
    text: 'Fractures, pseudofractures, history of rickets-like changes, osteomalacia, hypomineralization, bone/joint pain, and history of bone deformities',
    image1: '/assets/images/hpp-profile/skeleton/orthopedic-img.png',
    imageAlt1: 'Orthopedic image',
    image2: '',
    imageAlt2: '',
    condition: '',
    type: 'adults'
  },
  {
    active: false,
    id: 'orthopedic--infants',
    title: 'Orthopedic/skeletal<sup>1,3,9,14,17</sup>',
    word: 'Orthopedic/ Skeletal',
    icon: '/assets/images/hpp-profile/skeleton/orthopedic-icon-active.svg',
    text: 'Hypomineralization, skeletal deformities, bowing, short stature, bone pain, rickets, and fractures',
    image1: '/assets/images/hpp-profile/skeleton/orthopedic-img--infants.png',
    imageAlt1: 'Orthopedic image',
    image2: '',
    imageAlt2: '',
    condition: '',
    type: 'infants'
  },
  {
    active: false,
    id: 'developmental--infants',
    title: 'Developmental/growth<sup>11,13</sup>',
    word: 'Developmental/ Growth',
    icon: '/assets/images/hpp-profile/skeleton/developmental-icon-active.svg',
    text: 'Short stature, failure to thrive, poor weight gain, and delayed or missed motor milestones',
    image1: '/assets/images/hpp-profile/skeleton/developmental-img.png',
    imageAlt1: 'Developmental image',
    image2: '',
    imageAlt2: '',
    condition: '<p>Flared wrists are indicative of rachitic widening, with rickets associated with short stature and delayed walking.</p> <p>Reproduced with permission from Whyte MP. <em>Genetics of Bone Biology and Skeletal Disease.</em> 2013; 337-360.</p>',
    type: 'infants'
  }
]

export default data
