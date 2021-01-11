module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
      [
          "module-resolver",
          {
              root: ["./src"],
              alias: {
                  components: ["./src/components"],
                  hooks: ["./src/hooks"],
                  routes: ["./src/routes"],
                  screens: ["./src/screens"],
                  utils: ["./src/utils"],
                  assets: ["./src/assets"],
                  styles: ["./src/styles"],
                  config: ["./src/config"],
              },
              extensions: [".js", ".ts", ".tsx", ".ios.js", ".ios.tsx", ".android.js", ".android.tsx"],
          },
      ],
  ],
};
