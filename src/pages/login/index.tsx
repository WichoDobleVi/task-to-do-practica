import { Grid } from "@nextui-org/react";
import { ImageLogin } from "../../components/login/ImageLogin";
import { FormLogin } from "../../components/login/FormLogin";

export default function LoginPage() {
  return (
    <Grid.Container justify="center" alignContent='center' >
      <Grid xs={0} md={6} lg={6}>
        <ImageLogin />
      </Grid>
      <Grid justify='center' alignContent='center' alignItems='center' xs={12} md={6} lg={6}>
        <FormLogin />
      </Grid>
    </Grid.Container>
  )
}
