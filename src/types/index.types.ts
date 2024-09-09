/* eslint-disable @typescript-eslint/no-explicit-any */
export type profileData = {
  userCode: string;
  firstname: string;
  lastname: string;
  title: [
    {
      _id: string;
      value: string;
    }
  ];
  location: {
    city: string;
    state: string;
    latitude: string;
    longitude: string;
    country: string;
  };
  dpURL: string;
    status: {
    value: string;
    color: string;
  };
  profileDesignInfo: {
    designType: string;
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
    baseColor: string;
    profileBannerImageURL: string;
    tint: boolean;
    opacity: {
      primary: string;
      secondary: string;
    };
  };
  address: {
    city: string;
    state: string;
    latitude: string;
    longitude: string;
    country: string;
    fullAddress: string;
  };
  aadhaarVerifiedStatus: boolean;
  shareProfileURL: any;
  superSkillsIconURL: string;
  customImageCardDesignInfo: any;
  downloadURL: {
    playstoreURL: string;
    appstoreURL: string;
 };
};
