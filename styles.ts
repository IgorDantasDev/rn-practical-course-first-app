import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
export const Container = styled(SafeAreaView)`
  padding: 16px;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.TextInput`
  width: ${Dimensions.get("screen").width - 80}px;
  padding: 8px;
  border-radius: 8px;
  border-width: 1px;
  border-color: black;
`;
