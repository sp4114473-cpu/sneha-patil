export type Language = 'de' | 'en';

export interface ConceptStep {
  step: number;
  titleDE: string;
  titleEN: string;
  descriptionDE?: string;
  descriptionEN?: string;
  svgType: string;
}

export interface LegendItem {
  number: number;
  labelDE: string;
  labelEN: string;
  x?: number; // percentage on site plan
  y?: number;
  descriptionDE?: string;
  descriptionEN?: string;
}

export interface TechnicalSpec {
  itemNumber: number;
  nameDE: string;
  nameEN: string;
  category?: 'structure' | 'insulation' | 'facade' | 'finish';
  thickness?: string;
}

export interface ArchitecturalDrawing {
  id: string;
  titleDE: string;
  titleEN: string;
  scale: string;
  type: 'site_plan' | 'elevation' | 'section' | 'facade_detail' | 'floor_plan' | 'axonometric' | 'physical_model';
  imageOrSvg: string;
  descriptionDE?: string;
  descriptionEN?: string;
  legend?: LegendItem[];
  specs?: TechnicalSpec[];
}

export interface Project {
  id: string;
  number: number;
  titleDE: string;
  titleEN: string;
  subtitleDE: string;
  subtitleEN: string;
  categoryDE: string;
  categoryEN: string;
  type: string;
  locationDE: string;
  locationEN: string;
  year: string;
  heroImage: string;
  descriptionDE: string;
  descriptionEN: string;
  conceptSteps?: ConceptStep[];
  sitePlanLegend?: LegendItem[];
  drawings: ArchitecturalDrawing[];
  technicalSpecs?: TechnicalSpec[];
  highlightsDE: string[];
  highlightsEN: string[];
}

export interface WorkExperience {
  year: string;
  company: string;
  location: string;
  duration?: string;
  roleDE: string;
  roleEN: string;
  tasksDE: string[];
  tasksEN: string[];
}

export interface Education {
  period: string;
  degreeDE: string;
  degreeEN: string;
  institution: string;
  location: string;
  isCurrent?: boolean;
}

export interface Competition {
  year: string;
  titleDE: string;
  titleEN: string;
  location: string;
  tasksDE: string[];
  tasksEN: string[];
}

export interface PdfPage {
  pageNumber: number;
  titleDE: string;
  titleEN: string;
  category: 'Cover' | 'Resume' | 'Contents' | 'Furnace and Flow' | 'Flowline Café' | 'Der vertikale Spaziergang' | 'Raum für Wissen' | 'Closing';
  previewImage?: string;
  svgType?: string;
  textSnippetDE: string;
  textSnippetEN: string;
}
