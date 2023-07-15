import { View, Text, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const DotComponent = ({ selected }) => {
    return (
      <View
        className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
          selected ? "border border-red-400" : ""
        } p-2`}
      >
        <View
          className={`w-2 h-2 ${
            selected ? "bg-red-400" : "bg-red-200"
          }rounded-full `}
        ></View>
      </View>
    );
  };

  return (
    <Onboarding
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.replace("Home")}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../components/img/wizard.png")}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Welcome",
          subtitle: "Thank you for downloading our App",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../components/img/drive.png")}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Book A Lesson",
          subtitle: "When you get a free time book a lesson that works for you",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../components/img/pass.png")}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Get Your Licence",
          subtitle:
            "Learn Anything you will need to get you Licence on on stop App",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
