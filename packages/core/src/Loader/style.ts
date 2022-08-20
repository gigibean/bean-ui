import styled from '@bean-ui/styled-engine';

interface LoaderContentProps {
  color?: string;
  height: string | number;
  width: string | number;
}

export const LoaderContent = styled.span<LoaderContentProps>`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  & > svg {
    ${({ color }) => `fill: ${color ? color : ''};`}
    ${({ height }) => `height: ${height};`}
    ${({ width }) => `width: ${width};`}
  }
`;
