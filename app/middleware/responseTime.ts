module.exports = () => {
  return async function responseTime(ctx, next) {
    const start = Date.now();
    await next();
    const cost = Date.now() - start;
    ctx.set('X-Response-Time', cost);
  }
}