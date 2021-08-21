import React from "react";
import { COLOR } from "../../utils/style";
import { StyleSheet, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";

type ChangeIconType = {
  color?: string;
  width: number;
  height: number;
};

export const ChangeIcon: React.FC<ChangeIconType> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 512 512"
      fill={props.color || COLOR.BORDER}
    >
      <G>
        <Path
          d="M219.147,181.496c16.249,0,189.803-21.675,241.023,70.898c-2.526-75.721-72.438-187.506-241.023-186.276V0
		L51.83,126.804l167.318,126.784V181.496z"
        ></Path>
        <Path
          d="M292.821,330.522c-16.226,0-189.812,21.62-240.991-70.906c2.499,75.73,72.425,187.47,240.991,186.265V512
		L460.17,385.187L292.821,258.402V330.522z"
        ></Path>
      </G>
    </Svg>
  );
};
