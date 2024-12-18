import { CSS_IDS } from './css-selectors';

export const ELEMENTS = {
  GENERATE_QR_CODE_BUTTON: document.querySelector(CSS_IDS.GENERATE_QR_CODE_BUTTON),

  VERSIONS_TABLE: document.querySelector(CSS_IDS.VERSIONS_TABLE),
  ERROR_CORRECTION_LEVEL_CODIFICATION_TABLE: document.querySelector(CSS_IDS.ERROR_CORRECTION_LEVEL_CODIFICATION_TABLE),
  MASK_CODIFICATION_TABLE: document.querySelector(CSS_IDS.MASK_CODIFICATION_TABLE),

  ALIGNMENT_PATTERNS_DESCRIPTION: document.querySelector(CSS_IDS.ALIGNMENT_PATTERNS_DESCRIPTION),

  VERSION_PATTERN_COMPLETION_1: document.querySelector(CSS_IDS.VERSION_PATTERN_COMPLETION_1),
  VERSION_PATTERN_COMPLETION_2: document.querySelector(CSS_IDS.VERSION_PATTERN_COMPLETION_2),

  FORMAT_PATTERN_COMPLETION_1: document.querySelector(CSS_IDS.FORMAT_PATTERN_COMPLETION_1),
  FORMAT_PATTERN_COMPLETION_2: document.querySelector(CSS_IDS.FORMAT_PATTERN_COMPLETION_2),
  FORMAT_PATTERN_COMPLETION_3: document.querySelector(CSS_IDS.FORMAT_PATTERN_COMPLETION_3),

  ASCII_MESSAGE_TABLE: document.querySelector(CSS_IDS.ASCII_MESSAGE_TABLE),
  HOW_TO_SPLIT_IN_BLOCKS: document.querySelector(CSS_IDS.HOW_TO_SPLIT_IN_BLOCKS),
};
