import { CSS_IDS } from './css-selectors';

export const ELEMENTS = {
  GENERATE_QR_CODE_BUTTON: document.querySelector(CSS_IDS.GENERATE_QR_CODE_BUTTON),

  VERSIONS_TABLE: document.querySelector(CSS_IDS.VERSIONS_TABLE),
  ALIGNMENT_PATTERN_TABLE: document.querySelector(CSS_IDS.ALIGNMENT_PATTERN_TABLE),
  ASCII_MESSAGE_TABLE: document.querySelector(CSS_IDS.ASCII_MESSAGE_TABLE),

  VERSION_PATTERN_COMPLETION_1: document.querySelector(CSS_IDS.VERSION_PATTERN_COMPLETION_1),
  VERSION_PATTERN_COMPLETION_2: document.querySelector(CSS_IDS.VERSION_PATTERN_COMPLETION_2),
  
  FORMAT_PATTERN_COMPLETION_1: document.querySelector(CSS_IDS.FORMAT_PATTERN_COMPLETION_1),
  FORMAT_PATTERN_COMPLETION_2: document.querySelector(CSS_IDS.FORMAT_PATTERN_COMPLETION_2),
  FORMAT_PATTERN_COMPLETION_3: document.querySelector(CSS_IDS.FORMAT_PATTERN_COMPLETION_3),

  CALCULATION_OF_VERSION_CORRECTION_BITS: document.querySelector(CSS_IDS.CALCULATION_OF_VERSION_CORRECTION_BITS),
  CALCULATION_OF_FORMAT_CORRECTION_BITS: document.querySelector(CSS_IDS.CALCULATION_OF_FORMAT_CORRECTION_BITS),

  HOW_TO_ENTER_DATA_EXPLANATION: document.querySelector(CSS_IDS.HOW_TO_ENTER_DATA_EXPLANATION),
};
