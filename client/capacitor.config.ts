import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sc.com',
  appName: 'SocialChain',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
