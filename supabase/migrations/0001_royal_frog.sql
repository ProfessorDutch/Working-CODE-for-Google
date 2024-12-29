/*
  # Business Listings Schema

  1. New Tables
    - businesses
      - Basic business information and tier details
    - business_images 
      - Store image URLs for featured/hero listings

  2. Security
    - Enable RLS
    - Add policies for read/write access
*/

-- Create businesses table
CREATE TABLE IF NOT EXISTS businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  description TEXT,
  tier TEXT NOT NULL CHECK (tier IN ('ICON', 'ENHANCED', 'FEATURED', 'HERO')),
  contact JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create business_images table
CREATE TABLE IF NOT EXISTS business_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_images ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access" ON businesses
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access" ON business_images
  FOR SELECT USING (true);