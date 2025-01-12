import { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from ".";

interface ButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $color: ButtonProps["color"];
  $variant: ButtonProps["variant"];
  $size: ButtonProps["size"];
}

const buttonVariantsCss = {
  default: css<ButtonStyleProps>`
    background-color: ${({ $color }) => $color};

    &:hover {
      background-color: ${({ $color, theme }) => theme.utils.darkenColor($color!)};
    }
  `,

  tertiary: css<ButtonStyleProps>`
    background-color: transparent;
    border: solid 1px ${({ $color }) => $color};
    color: ${({ $color }) => $color};

    &:hover {
      color: #fff;
      background-color: ${({ $color }) => $color};
    }
  `,
};

const buttonSizesCss = {
  sm: css<ButtonStyleProps>`
    padding: 8px 12px;
  `,
  md: css<ButtonStyleProps>`
    padding: 12px 16px;
  `,
  lg: css<ButtonStyleProps>`
    padding: 16px 20px;
  `,
};

export const Button: FC<ButtonStyleProps> = styled.button<ButtonStyleProps>`
  outline: none;
  border: none;
  color: #fff;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;

  transition: all 0.3s;

  ${({ $variant }) => buttonVariantsCss[$variant!]}
  ${({ $size }) => buttonSizesCss[$size!]}
`;
