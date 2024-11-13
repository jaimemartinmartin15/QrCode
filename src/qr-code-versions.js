// Note: the errorCapacity is for binary data
export const QR_CODE_VERSIONS = [
  { version: 1, size: 21, errorCapacity: { L: 17, M: 14, Q: 11, H: 7 }, alignmentPatternPositions: [] },
  { version: 2, size: 25, errorCapacity: { L: 32, M: 26, Q: 20, H: 14 }, alignmentPatternPositions: [16] },
  { version: 3, size: 29, errorCapacity: { L: 53, M: 42, Q: 32, H: 24 }, alignmentPatternPositions: [20] },
  { version: 4, size: 33, errorCapacity: { L: 78, M: 62, Q: 46, H: 34 }, alignmentPatternPositions: [24] },
  { version: 5, size: 37, errorCapacity: { L: 106, M: 84, Q: 60, H: 44 }, alignmentPatternPositions: [28] },
  { version: 6, size: 41, errorCapacity: { L: 134, M: 106, Q: 74, H: 58 }, alignmentPatternPositions: [32] },
  { version: 7, size: 45, errorCapacity: { L: 154, M: 122, Q: 86, H: 64 }, alignmentPatternPositions: [4, 20, 36] },
  { version: 8, size: 49, errorCapacity: { L: 192, M: 152, Q: 108, H: 84 }, alignmentPatternPositions: [4, 22, 40] },
  { version: 9, size: 53, errorCapacity: { L: 230, M: 180, Q: 130, H: 98 }, alignmentPatternPositions: [4, 24, 44] },
  { version: 10, size: 57, errorCapacity: { L: 271, M: 213, Q: 151, H: 119 }, alignmentPatternPositions: [4, 26, 48] },
  { version: 11, size: 61, errorCapacity: { L: 321, M: 251, Q: 177, H: 137 }, alignmentPatternPositions: [4, 28, 52] },
  { version: 12, size: 65, errorCapacity: { L: 367, M: 287, Q: 203, H: 155 }, alignmentPatternPositions: [4, 30, 56] },
  { version: 13, size: 69, errorCapacity: { L: 425, M: 331, Q: 241, H: 177 }, alignmentPatternPositions: [4, 32, 60] },
  { version: 14, size: 73, errorCapacity: { L: 458, M: 362, Q: 258, H: 194 }, alignmentPatternPositions: [4, 24, 44, 64] },
  { version: 15, size: 77, errorCapacity: { L: 520, M: 412, Q: 292, H: 220 }, alignmentPatternPositions: [4, 24, 46, 68] },
  { version: 16, size: 81, errorCapacity: { L: 586, M: 450, Q: 322, H: 250 }, alignmentPatternPositions: [4, 24, 48, 72] },
  { version: 17, size: 85, errorCapacity: { L: 644, M: 504, Q: 364, H: 280 }, alignmentPatternPositions: [4, 28, 52, 76] },
  { version: 18, size: 89, errorCapacity: { L: 718, M: 560, Q: 394, H: 310 }, alignmentPatternPositions: [4, 28, 54, 80] },
  { version: 19, size: 93, errorCapacity: { L: 792, M: 624, Q: 442, H: 338 }, alignmentPatternPositions: [4, 28, 56, 84] },
  { version: 20, size: 97, errorCapacity: { L: 858, M: 666, Q: 482, H: 382 }, alignmentPatternPositions: [4, 32, 60, 88] },
  { version: 21, size: 101, errorCapacity: { L: 929, M: 711, Q: 509, H: 403 }, alignmentPatternPositions: [4, 26, 48, 70, 92] },
  { version: 22, size: 105, errorCapacity: { L: 1003, M: 779, Q: 565, H: 439 }, alignmentPatternPositions: [4, 24, 48, 72, 96] },
  { version: 23, size: 109, errorCapacity: { L: 1091, M: 857, Q: 611, H: 461 }, alignmentPatternPositions: [4, 28, 52, 76, 100] },
  { version: 24, size: 113, errorCapacity: { L: 1171, M: 911, Q: 661, H: 511 }, alignmentPatternPositions: [4, 26, 52, 78, 104] },
  { version: 25, size: 117, errorCapacity: { L: 1273, M: 997, Q: 715, H: 535 }, alignmentPatternPositions: [4, 30, 56, 82, 108] },
  { version: 26, size: 121, errorCapacity: { L: 1367, M: 1059, Q: 751, H: 593 }, alignmentPatternPositions: [4, 28, 56, 84, 112] },
  { version: 27, size: 125, errorCapacity: { L: 1465, M: 1125, Q: 805, H: 625 }, alignmentPatternPositions: [4, 32, 60, 88, 116] },
  { version: 28, size: 129, errorCapacity: { L: 1528, M: 1190, Q: 868, H: 658 }, alignmentPatternPositions: [4, 24, 48, 72, 96, 120] },
  { version: 29, size: 133, errorCapacity: { L: 1628, M: 1264, Q: 908, H: 698 }, alignmentPatternPositions: [4, 28, 52, 76, 100, 124] },
  { version: 30, size: 137, errorCapacity: { L: 1732, M: 1370, Q: 982, H: 742 }, alignmentPatternPositions: [4, 24, 50, 76, 102, 128] },
  { version: 31, size: 141, errorCapacity: { L: 1840, M: 1452, Q: 1030, H: 790 }, alignmentPatternPositions: [4, 28, 54, 80, 106, 132] },
  { version: 32, size: 145, errorCapacity: { L: 1952, M: 1538, Q: 1112, H: 842 }, alignmentPatternPositions: [4, 32, 58, 84, 110, 136] },
  { version: 33, size: 149, errorCapacity: { L: 2068, M: 1628, Q: 1168, H: 898 }, alignmentPatternPositions: [4, 28, 56, 84, 112, 140] },
  { version: 34, size: 153, errorCapacity: { L: 2188, M: 1722, Q: 1228, H: 958 }, alignmentPatternPositions: [4, 32, 60, 88, 116, 144] },
  {
    version: 35,
    size: 157,
    errorCapacity: { L: 2303, M: 1809, Q: 1283, H: 983 },
    alignmentPatternPositions: [4, 28, 52, 76, 100, 124, 148],
  },
  {
    version: 36,
    size: 161,
    errorCapacity: { L: 2431, M: 1911, Q: 1351, H: 1051 },
    alignmentPatternPositions: [4, 22, 48, 74, 100, 126, 152],
  },
  {
    version: 37,
    size: 165,
    errorCapacity: { L: 2563, M: 1989, Q: 1423, H: 1093 },
    alignmentPatternPositions: [4, 26, 52, 78, 104, 130, 156],
  },
  {
    version: 38,
    size: 169,
    errorCapacity: { L: 2699, M: 2099, Q: 1499, H: 1139 },
    alignmentPatternPositions: [4, 30, 56, 82, 108, 134, 160],
  },
  {
    version: 39,
    size: 173,
    errorCapacity: { L: 2809, M: 2213, Q: 1579, H: 1219 },
    alignmentPatternPositions: [4, 24, 52, 80, 108, 136, 164],
  },
  {
    version: 40,
    size: 177,
    errorCapacity: { L: 2953, M: 2331, Q: 1663, H: 1273 },
    alignmentPatternPositions: [4, 28, 56, 84, 112, 140, 168],
  },
];
