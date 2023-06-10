// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const servicePincode = [361160, 244123, 342341, 345322, 564562];
  res.status(200).json({ success: true, message: servicePincode });
}
