import os
import json

assets_dir = "assets"
catalogue_data = {}

# Skip these non-category items in assets folder
skip_items = {"logo.png", "logo.jpg", "logo.webp", ".DS_Store", "Thumbs.db"}

for category in sorted(os.listdir(assets_dir)):
    if category in skip_items:
        continue
    category_path = os.path.join(assets_dir, category)
    if os.path.isdir(category_path):
        images = []
        for filename in sorted(os.listdir(category_path)):
            if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp', '.gif')):
                # Keep forward slashes for web compatibility
                images.append(f"assets/{category}/{filename}")
        if images:
            catalogue_data[category] = images

# Read the existing catalogue.js
with open("js/catalogue.js", "r", encoding="utf-8") as f:
    existing_content = f.read()

# Build the new catalogueData block
new_data_block = "window.catalogueData = " + json.dumps(catalogue_data, indent=4, ensure_ascii=False) + ";"

# Replace ONLY the window.catalogueData block, keep everything else
import re
pattern = r'window\.catalogueData\s*=\s*\{.*?\};'
new_content = re.sub(pattern, new_data_block, existing_content, flags=re.DOTALL)

# Write back
with open("js/catalogue.js", "w", encoding="utf-8") as f:
    f.write(new_content)

total_images = sum(len(v) for v in catalogue_data.values())
print(f"✅ Done! {total_images} images across {len(catalogue_data)} categories.")
print("✅ All existing catalogue.js logic preserved.")