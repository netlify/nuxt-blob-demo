export default defineEventHandler(async (event) => {
  await useStorage().setItem('test:foo', { hello: 'world' })
  const item = await useStorage().getItem('test:foo')
  return item
})
