import React, { ButtonHTMLAttributes } from "react";
import * as S from "./styles";
import { colors } from "@galileo-ui/tokens";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "tertiary";
  size?: "sm" | "md" | "lg";
  color?: string;
}

export const Button = ({
  size = "md",
  variant = "default",
  color = colors.purple["700"],
  ...buttonProps
}: ButtonProps) => {
  return (
    <S.Button $size={size} $variant={variant} $color={color} {...buttonProps} />
  );
};

Button.displayName = "Button";
