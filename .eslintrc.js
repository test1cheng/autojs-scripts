module.exports = {
  extends: ['@ofa2/eslint-config'],
  parserOptions: { project: ['./tsconfig.json'] },
  globals: {
    // 引入 android class
    Settings: false,
    Uri: false,
    Intent: false,
    Context: false,
    AudioManager: false,

    // autojs 自带的
    auto: false,
    ui: false,
    threads: false,
    events: false,
    app: false,
    back: false,
    openAppSetting: false,
    images: false,
    device: false,
    open: false,
    press: false,
    click: false,
    swipe: false,
    gesture: false,
    home: false,

    context: false,
    importClass: false,
    android: false,

    sleep: false,
    currentPackage: false,
    currentActivity: false,
    setClip: false,
    getClip: false,
    toast: false,
    toastLog: false,
    waitForActivity: false,
    waitForPackage: false,
    exit: false,
    random: false,
    random: false,
    text: false,
    textContains: false,
    textStartsWith: false,
    textEndsWith: false,
    textMatches: false,
    desc: false,
    descContains: false,
    descStartsWith: false,
    descEndsWith: false,
    descMatches: false,
    id: false,
    idContains: false,
    idStartsWith: false,
    idEndsWith: false,
    idMatches: false,
    className: false,
    classNameContains: false,
    classNameStartsWith: false,
    classNameEndsWith: false,
    classNameMatches: false,
  },
  rules: {
    'no-console': ['off'],
  },
};
