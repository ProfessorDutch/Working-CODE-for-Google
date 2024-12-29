/*
  # Add sample businesses

  1. New Data
    - Adds sample business records for testing
    - Includes variety of business types and tiers
  
  2. Changes
    - Inserts initial business data
*/

INSERT INTO businesses (name, address, phone, website, description, tier) VALUES
('Grace Technology Solutions', '123 Tech Lane, Atlanta, GA 30303', '(404) 555-0101', 'gracetechsolutions.com', 'Faith-driven software development and IT services', 'HERO'),
('Cornerstone Construction', '456 Builder Ave, Marietta, GA 30060', '(770) 555-0102', 'cornerstonebuild.com', 'Quality construction services with Christian values', 'FEATURED'),
('Faithful Financial Services', '789 Money Row, Sandy Springs, GA 30328', '(678) 555-0103', 'faithfulfinance.com', 'Christian financial planning and advisory', 'ENHANCED'),
('Hope Healthcare Partners', '321 Care Street, Roswell, GA 30075', '(770) 555-0104', 'hopehealthga.com', 'Compassionate healthcare services', 'FEATURED'),
('Divine Design Studio', '654 Creative Way, Alpharetta, GA 30004', '(678) 555-0105', 'divinedesignstudio.com', 'Creative design services with purpose', 'ENHANCED'),
('Blessed Bookkeeping', '987 Account Lane, Decatur, GA 30030', '(404) 555-0106', 'blessedbookkeeping.com', 'Professional accounting services', 'ICON'),
('Faith Forward Marketing', '147 Brand Street, Dunwoody, GA 30338', '(770) 555-0107', 'faithforwardmktg.com', 'Purpose-driven marketing solutions', 'ENHANCED'),
('Covenant Consulting Group', '258 Advisory Circle, Buckhead, GA 30305', '(404) 555-0108', 'covenantconsult.com', 'Strategic business consulting', 'FEATURED'),
('Spirit & Soul Cafe', '369 Flavor Road, Midtown, GA 30309', '(404) 555-0109', 'spiritsoulcafe.com', 'Christian-owned coffee shop and bakery', 'ICON'),
('Truth Tech Training', '741 Learn Lane, Peachtree City, GA 30269', '(770) 555-0110', 'truthtechtraining.com', 'Faith-based technology education', 'ENHANCED')
ON CONFLICT (id) DO NOTHING;