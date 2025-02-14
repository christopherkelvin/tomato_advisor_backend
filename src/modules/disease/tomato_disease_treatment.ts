import { DiseaseTreatment } from './types/disease-treatment.types';
export const diseaseTreaments: DiseaseTreatment[] = [
  {
    id: 1,
    name: 'Early Blight',
    recommended_pesticides: [
      {
        name: 'Chlorothalonil',
        type: 'Broad-spectrum fungicide',
        dosage: '2.5 mL per liter of water',
      },
      {
        name: 'Mancozeb',
        type: 'Effective against fungal pathogens',
        dosage: '3-5 grams per liter of water',
      },
    ],
    application_frequency: 'Every 7-10 days during disease-prone seasons',
  },
  {
    id: 2,
    name: 'Late Blight',
    recommended_pesticides: [
      {
        name: 'Metalaxyl',
        type: 'Systemic fungicide',
        dosage: '1-2 mL per liter of water',
      },
      {
        name: 'Copper-based Fungicide',
        type: 'Preventive control',
        dosage: '3 grams per liter of water',
      },
    ],
    application_frequency: 'Every 5-7 days during humid conditions',
  },
  {
    id: 3,
    name: 'Bacterial Spot',
    recommended_pesticides: [
      {
        name: 'Copper oxychloride',
        type: 'Prevents bacterial growth',
        dosage: '3 grams per liter of water',
      },
      {
        name: 'Copper hydroxide',
        type: 'Effective against bacterial infections',
        dosage: '3 grams per liter of water',
      },
    ],
    application_frequency: 'Every 7 days or after heavy rainfall',
  },
  {
    id: 4,
    name: 'Septoria Leaf Spot',
    recommended_pesticides: [
      {
        name: 'Chlorothalonil',
        type: 'Contact fungicide for foliar diseases',
        dosage: '2.5-3 mL per liter of water',
      },
      {
        name: 'Mancozeb',
        type: 'Protects against fungal spores',
        dosage: '3-5 grams per liter of water',
      },
    ],
    application_frequency: 'Every 7-14 days, depending on disease severity',
  },
  {
    id: 5,
    name: 'Tomato Yellow Leaf Curl Virus (TYLCV)',
    recommended_pesticides: [
      {
        name: 'Imidacloprid',
        type: 'Systemic insecticide to control whiteflies',
        dosage: '0.3-0.5 mL per liter of water',
      },
      {
        name: 'Thiamethoxam',
        type: 'Effective against whitefly vectors',
        dosage: '0.4-0.6 mL per liter of water',
      },
    ],
    application_frequency:
      'Every 10-14 days based on whitefly population monitoring',
  },
  {
    id: 6,
    name: 'Leaf Mold',
    recommended_pesticides: [
      {
        name: 'Copper hydroxide',
        type: 'Effective against fungal spores',
        dosage: '2-3 grams per liter of water',
      },
      {
        name: 'Mancozeb',
        type: 'Prevents foliar infections',
        dosage: '3 grams per liter of water',
      },
    ],
    application_frequency: 'Every 7-10 days, especially in humid conditions',
  },
  {
    id: 7,
    name: 'Tomato Mosaic Virus',
    recommended_treatment:
      'No chemical control available. Manage aphids (vectors) and use virus-free seeds.',
    dosage: 'No amount of dosage required',
    application_frequency: 'No recommendation on frequency',
  },
  {
    id: 8,
    name: 'Spider Mites (Two-Spotted Spider Mite)',
    recommended_pesticides: [
      {
        name: 'Abamectin',
        type: 'Selective miticide',
        dosage: '0.5-1 mL per liter of water',
      },
      {
        name: 'Sulfur-based sprays',
        type: 'Controls mite populations',
        dosage: '2-3 grams per liter of water',
      },
    ],
    application_frequency: 'Every 7-10 days if infestation is severe',
  },
  {
    id: 9,
    name: 'Target Spot',
    recommended_pesticides: [
      {
        name: 'Chlorothalonil',
        type: 'Contact fungicide',
        dosage: '2-3 grams per liter of water',
      },
      {
        name: 'Mancozeb',
        type: 'Broad-spectrum fungicide',
        dosage: '3 grams per liter of water',
      },
      {
        name: 'Azoxystrobin',
        type: 'Systemic fungicide with protective action',
        dosage: '1-2 mL per liter of water',
      },
    ],
    application_frequency: 'Every 7-14 days, depending on disease severity',
  },
  {
    id: 10,
    name: 'Healthy',
    recommended_treatment:
      'No pesticide application is required. Focus on proper nutrition and preventive measures to maintain health.',
  },
];
