-- Add His Hands Church and other sample churches
INSERT INTO businesses (name, address, phone, website, description, tier) VALUES
('His Hands Church Woodstock', '2550 Hickory Grove Rd NW, Woodstock, GA 30188', '(770) 516-1900', 'hishandschurch.org', 'A vibrant church community in Woodstock, Georgia dedicated to serving Christ and the community.', 'FEATURED'),
('Grace Community Church', '1234 Faith Street, Atlanta, GA 30301', '(404) 555-0120', 'gracecommunitychurch.org', 'Welcoming church focused on building faith and community', 'FEATURED'),
('Hope Fellowship', '5678 Blessing Road, Marietta, GA 30060', '(770) 555-0121', 'hopefellowship.org', 'A place of hope and fellowship for all', 'ENHANCED')
ON CONFLICT (id) DO NOTHING;