import { GridItem } from 'components/extend/GridItem/GridItem';
import { Wrapper } from 'components/extend/Wrapper/Wrapper';
import { StyledErrorTemplate, StyledErrorTemplateGrid } from './StyledErrorTemplate';

interface IErrorTemplateProps {
  message: string;
}

export const ErrorTemplate = ({ message }: IErrorTemplateProps): JSX.Element => {
  return (
    <>
      <StyledErrorTemplate>
        <Wrapper>
          <StyledErrorTemplateGrid align="center" justify="center">
            <GridItem justify="center" align="center">
              {message}
            </GridItem>
          </StyledErrorTemplateGrid>
        </Wrapper>
      </StyledErrorTemplate>
    </>
  );
};
