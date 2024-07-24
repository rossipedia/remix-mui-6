import Container from '@mui/material-pigment-css/Container';
import Stack from '@mui/material-pigment-css/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Index() {
  return (
    <Container>
      <Stack direction="column" spacing={2} sx={{ alignItems: 'start' }}>
        <Typography variant="h2">Hello</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          tincidunt turpis. Donec in velit sed est luctus pulvinar sed eget
          quam. Maecenas mi lacus, suscipit a tellus vitae, posuere tempor sem.
          Cras iaculis purus aliquam, gravida neque nec, semper enim. Duis
          facilisis ut elit eu tristique. Etiam non quam nibh. Suspendisse id
          ante ut libero maximus volutpat. Fusce nec aliquam quam. Fusce vitae
          urna et arcu venenatis molestie ac id lectus. Ut ac felis justo.
          Vestibulum ac massa vitae lacus dignissim congue at non nulla. Ut
          rutrum massa ut lacinia semper. Suspendisse purus urna, vestibulum in
          mauris sed, bibendum posuere magna. Morbi semper a nisi molestie
          maximus. Quisque ut ex blandit ipsum vestibulum tincidunt. Duis
          aliquet metus mauris, at gravida urna vulputate vel
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            console.log('clicked');
          }}
        >
          Contained Button
        </Button>
        <TextField label="Text Field" variant="outlined" />
      </Stack>
    </Container>
  );
}
