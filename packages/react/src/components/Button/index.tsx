import React, { ButtonHTMLAttributes, ComponentRef, forwardRef } from "react";
import * as S from "./styles";
import { colors } from "@galileo-ui/tokens";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "tertiary";
  size?: "sm" | "md" | "lg";
  color?: string;
}

export const Button = forwardRef<ComponentRef<typeof S.Button>, ButtonProps>(
  (
    {
      size = "md",
      variant = "default",
      color = colors.purple["700"],
      ...buttonProps
    }: ButtonProps,
    ref
  ) => {
    return (
      <S.Button
        ref={ref}
        $size={size}
        $variant={variant}
        $color={color}
        {...buttonProps}
      />
    );
  }
);

Button.displayName = "Button";
