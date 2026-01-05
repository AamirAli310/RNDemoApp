const variant = process.env.APP_VARIANT || 'dev';
const IS_DEV = variant === 'dev' || variant === 'development';
// const IS_UAT = variant === 'uat';
const IS_UAT = variant === 'uat' || variant === 'prod-beta' || variant === 'beta' || variant === 'preview';
const IS_PROD_BETA = variant === 'prod-beta' || variant === 'beta' || variant === 'preview';
const IS_PROD = variant === 'prod' || variant === 'production';
const PLATFORM = process.env.PLATFORM || 'ios';

const isIOS = () => {
    return PLATFORM === 'ios';
}
const isAndroid = () => {
    return PLATFORM === 'android';
}

const getAppIdentifier = () => {
    if (IS_DEV) {
        return "ae.scad.rndapp.dev";
    } else if (IS_UAT) {
        return "ae.scad.rndapp.uat";
    } else if (IS_PROD_BETA) {
        return "ae.scad.rndapp.beta";
    } else if (IS_PROD) {
        return "ae.scad.rndapp";
    }
};

const getAppRuntimeVersion = () => {
    if (isIOS()) {
        if (IS_DEV) {
            return "1.1.1";
        } else if (IS_UAT) {
            return "1.1.2";
        } else if (IS_PROD_BETA) {
            return "1.0.4";
        } else if (IS_PROD) {
            return "1.0.4";
        }
    } else if (isAndroid()) {
        if (IS_DEV) {
            return "1.1.1";
        } else if (IS_UAT) {
            return "1.1.2";
        } else if (IS_PROD_BETA) {
            return "1.0.4";
        } else if (IS_PROD) {
            return "1.0.4";
        }
    }
};


const getSplashImage = () => {
    if (isIOS()) {
        if (IS_DEV) {
            return "./assets/images/splash-dev.png";
        } else if (IS_UAT) {
            return "./assets/images/splash-uat.png";
        } else if (IS_PROD_BETA) {
            return "./assets/images/splash-beta.png";
        } else if (IS_PROD) {
            return "./assets/images/splash-prod.png";
        }
    } else if (isAndroid()) {
        if (IS_DEV) {
            return "./assets/images/splash-dev.png";
        } else if (IS_UAT) {
            return "./assets/images/splash-uat.png";
        } else if (IS_PROD_BETA) {
            return "./assets/images/splash-beta.png";
        } else if (IS_PROD) {
            return "./assets/images/splash-prod.png";
        }
    }
};

const getAppIcon = () => {
    if (isIOS()) {
        if (IS_DEV) {
            return "./assets/images/icon-dev.png";
        } else if (IS_UAT) {
            return "./assets/images/icon-uat.png";
        } else if (IS_PROD_BETA) {
            return "./assets/images/icon-beta.png";
        } else if (IS_PROD) {
            return "./assets/images/icon-prod.png";
        }
    } else if (isAndroid()) {
        if (IS_DEV) {
            return "./assets/images/icon-dev.png";
        } else if (IS_UAT) {
            return "./assets/images/icon-uat.png";
        } else if (IS_PROD_BETA) {
            return "./assets/images/icon-beta.png";
        } else if (IS_PROD) {
            return "./assets/images/icon-prod.png";
        }
    }
};

const getAppDisplayName = () => {

    if (IS_DEV) {
        return "Dev RNDemoApp";
    } else if (IS_UAT) {
        return "UAT RNDemoApp";
    } else if (IS_PROD_BETA) {
        return "Beta RNDemoApp";
    } else if (IS_PROD) {
        return "RNDemoApp";
    }
};

const getAppScheme = () => {
    if (isIOS()) {
        if (IS_DEV) {
            return "rndemoapp-dev";
        } else if (IS_UAT) {
            return "rndemoapp-uat";
        } else if (IS_PROD_BETA) {
            return "rndemoapp-beta";
        } else if (IS_PROD) {
            return "rndemoapp";
        }
    } else if (isAndroid()) {
        if (IS_DEV) {
            return "rndemoapp-dev";
        } else if (IS_UAT) {
            return "rndemoapp-uat";
        } else if (IS_PROD_BETA) {
            return "rndemoapp-beta";
        } else if (IS_PROD) {
            return "rndemoapp";
        }
    }
};

export default {
    name: getAppDisplayName(),
    slug: "RNDemoApp",
    version: "1.0.0",
    orientation: "portrait",
    icon: getAppIcon(),
    scheme: getAppScheme(),
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    owner: "aamobteam",
    sdkVersion: "54.0.0",
    platforms: [
        "ios",
        "android",
        "web"
    ],
    splash: {
        image: getSplashImage(),
        resizeMode: "contain",
        backgroundColor: "#ffffff"
    },
    ios: {
        supportsTablet: true,
        bundleIdentifier: getAppIdentifier(),
        runtimeVersion: getAppRuntimeVersion(),
        infoPlist: {
            "CFBundleDisplayName": getAppDisplayName(),
            "ITSAppUsesNonExemptEncryption": false
        },
        entitlements: {
            "aps-environment": "development",
            //"fonts": "com.apple.developer.user-fonts",
            //"wallet": "com.apple.developer.pass-type-identifiers"
        }
    },
    android: {
        adaptiveIcon: {
            "foregroundImage": "./assets/images/adaptive-icon.png",
            "backgroundColor": "#ffffff"
        },
        edgeToEdgeEnabled: true,
        predictiveBackGestureEnabled: false,
        package: getAppIdentifier(),
        runtimeVersion: getAppRuntimeVersion()
    },
    web: {
        bundler: "metro",
        output: "static",
        favicon: "./assets/images/favicon.png",
        runtimeVersion: {
            "policy": "appVersion"
        }
    },
    plugins: [
        "expo-router",
        [
            "expo-dev-client",
            {
                addGeneratedScheme: !!IS_DEV,
            }
        ]
    ],
    experiments: {
        "typedRoutes": true
    },
    extra: {
        router: {},
        eas: {
            "projectId": "40b18512-f5fb-4bf3-a537-264cbd03cacc"
        }
    },
    updates: {
        url: "https://u.expo.dev/40b18512-f5fb-4bf3-a537-264cbd03cacc"
    }
};
