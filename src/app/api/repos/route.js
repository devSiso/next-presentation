export async function GET() {
  try {
    const response = await fetch('https://api.github.com/users/devSiso/repos');
    const data = await response.json();

    return Response.json({
      statusCode: 200,
      data
    });
  } catch (error) {
    return Response.json({ statusCode: 500, message: error.message })
  }
}