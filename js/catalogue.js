/**
 * catalogue.js
 * Handles dynamic rendering, filtering, and searching for the catalogue.
 */

// Dummy data object structure
// Add your actual image filenames here to reflect your folder structure
window.catalogueData = {
    "Ac Milan kits": [
        "assets/Ac Milan kits/acmilan (1).jpeg",
        "assets/Ac Milan kits/acmilan (1).jpg",
        "assets/Ac Milan kits/acmilan (1).webp",
        "assets/Ac Milan kits/acmilan (10).webp",
        "assets/Ac Milan kits/acmilan (11).webp",
        "assets/Ac Milan kits/acmilan (12).webp",
        "assets/Ac Milan kits/acmilan (13).webp",
        "assets/Ac Milan kits/acmilan (14).webp",
        "assets/Ac Milan kits/acmilan (15).webp",
        "assets/Ac Milan kits/acmilan (16).webp",
        "assets/Ac Milan kits/acmilan (17).webp",
        "assets/Ac Milan kits/acmilan (18).webp",
        "assets/Ac Milan kits/acmilan (19).webp",
        "assets/Ac Milan kits/acmilan (2).webp",
        "assets/Ac Milan kits/acmilan (20).webp",
        "assets/Ac Milan kits/acmilan (21).webp",
        "assets/Ac Milan kits/acmilan (22).webp",
        "assets/Ac Milan kits/acmilan (23).webp",
        "assets/Ac Milan kits/acmilan (24).webp",
        "assets/Ac Milan kits/acmilan (3).webp",
        "assets/Ac Milan kits/acmilan (4).webp",
        "assets/Ac Milan kits/acmilan (5).webp",
        "assets/Ac Milan kits/acmilan (6).webp",
        "assets/Ac Milan kits/acmilan (7).webp",
        "assets/Ac Milan kits/acmilan (8).webp",
        "assets/Ac Milan kits/acmilan (9).webp"
    ],
    "Anime kits": [
        "assets/Anime kits/anime (1).webp",
        "assets/Anime kits/anime (2).webp",
        "assets/Anime kits/anime (3).webp",
        "assets/Anime kits/anime (4).webp",
        "assets/Anime kits/anime (5).webp"
    ],
    "Argentina kits": [
        "assets/Argentina kits/arg (1).jpeg",
        "assets/Argentina kits/arg (1).jpg",
        "assets/Argentina kits/arg (1).webp",
        "assets/Argentina kits/arg (10).webp",
        "assets/Argentina kits/arg (11).webp",
        "assets/Argentina kits/arg (2).jpeg",
        "assets/Argentina kits/arg (2).jpg",
        "assets/Argentina kits/arg (2).webp",
        "assets/Argentina kits/arg (3).webp",
        "assets/Argentina kits/arg (4).webp",
        "assets/Argentina kits/arg (5).webp",
        "assets/Argentina kits/arg (6).webp",
        "assets/Argentina kits/arg (7).webp",
        "assets/Argentina kits/arg (8).webp",
        "assets/Argentina kits/arg (9).webp"
    ],
    "Barca kits": [
        "assets/Barca kits/fcb (1).jpeg",
        "assets/Barca kits/fcb (1).webp",
        "assets/Barca kits/fcb (10).webp",
        "assets/Barca kits/fcb (11).webp",
        "assets/Barca kits/fcb (12).webp",
        "assets/Barca kits/fcb (13).webp",
        "assets/Barca kits/fcb (14).webp",
        "assets/Barca kits/fcb (15).webp",
        "assets/Barca kits/fcb (16).webp",
        "assets/Barca kits/fcb (17).webp",
        "assets/Barca kits/fcb (18).webp",
        "assets/Barca kits/fcb (19).webp",
        "assets/Barca kits/fcb (2).jpeg",
        "assets/Barca kits/fcb (2).webp",
        "assets/Barca kits/fcb (20).webp",
        "assets/Barca kits/fcb (21).webp",
        "assets/Barca kits/fcb (22).webp",
        "assets/Barca kits/fcb (23).webp",
        "assets/Barca kits/fcb (24).webp",
        "assets/Barca kits/fcb (25).webp",
        "assets/Barca kits/fcb (26).webp",
        "assets/Barca kits/fcb (27).webp",
        "assets/Barca kits/fcb (28).webp",
        "assets/Barca kits/fcb (29).webp",
        "assets/Barca kits/fcb (3).webp",
        "assets/Barca kits/fcb (30).webp",
        "assets/Barca kits/fcb (31).webp",
        "assets/Barca kits/fcb (32).webp",
        "assets/Barca kits/fcb (33).webp",
        "assets/Barca kits/fcb (34).webp",
        "assets/Barca kits/fcb (35).webp",
        "assets/Barca kits/fcb (4).webp",
        "assets/Barca kits/fcb (5).webp",
        "assets/Barca kits/fcb (6).webp",
        "assets/Barca kits/fcb (7).webp",
        "assets/Barca kits/fcb (8).webp",
        "assets/Barca kits/fcb (9).webp"
    ],
    "Beckham kits": [
        "assets/Beckham kits/beckham (1).jpeg",
        "assets/Beckham kits/beckham (1).webp",
        "assets/Beckham kits/beckham (10).webp",
        "assets/Beckham kits/beckham (11).webp",
        "assets/Beckham kits/beckham (12).webp",
        "assets/Beckham kits/beckham (13).webp",
        "assets/Beckham kits/beckham (14).webp",
        "assets/Beckham kits/beckham (15).webp",
        "assets/Beckham kits/beckham (16).webp",
        "assets/Beckham kits/beckham (17).webp",
        "assets/Beckham kits/beckham (18).webp",
        "assets/Beckham kits/beckham (19).webp",
        "assets/Beckham kits/beckham (2).webp",
        "assets/Beckham kits/beckham (20).webp",
        "assets/Beckham kits/beckham (21).webp",
        "assets/Beckham kits/beckham (3).webp",
        "assets/Beckham kits/beckham (4).webp",
        "assets/Beckham kits/beckham (5).webp",
        "assets/Beckham kits/beckham (6).webp",
        "assets/Beckham kits/beckham (7).webp",
        "assets/Beckham kits/beckham (8).webp",
        "assets/Beckham kits/beckham (9).webp"
    ],
    "Brazil kits": [
        "assets/Brazil kits/brazil (1).webp",
        "assets/Brazil kits/brazil (10).webp",
        "assets/Brazil kits/brazil (2).webp",
        "assets/Brazil kits/brazil (3).webp",
        "assets/Brazil kits/brazil (4).webp",
        "assets/Brazil kits/brazil (5).webp",
        "assets/Brazil kits/brazil (6).webp",
        "assets/Brazil kits/brazil (7).webp",
        "assets/Brazil kits/brazil (8).webp",
        "assets/Brazil kits/brazil (9).webp"
    ],
    "CR7 Kits": [
        "assets/CR7 Kits/cr7 (1).jpeg",
        "assets/CR7 Kits/cr7 (1).jpg",
        "assets/CR7 Kits/cr7 (1).webp",
        "assets/CR7 Kits/cr7 (10).webp",
        "assets/CR7 Kits/cr7 (11).webp",
        "assets/CR7 Kits/cr7 (12).webp",
        "assets/CR7 Kits/cr7 (13).webp",
        "assets/CR7 Kits/cr7 (14).webp",
        "assets/CR7 Kits/cr7 (15).webp",
        "assets/CR7 Kits/cr7 (16).webp",
        "assets/CR7 Kits/cr7 (17).webp",
        "assets/CR7 Kits/cr7 (18).webp",
        "assets/CR7 Kits/cr7 (19).webp",
        "assets/CR7 Kits/cr7 (2).jpeg",
        "assets/CR7 Kits/cr7 (2).jpg",
        "assets/CR7 Kits/cr7 (2).webp",
        "assets/CR7 Kits/cr7 (20).webp",
        "assets/CR7 Kits/cr7 (21).webp",
        "assets/CR7 Kits/cr7 (22).webp",
        "assets/CR7 Kits/cr7 (23).webp",
        "assets/CR7 Kits/cr7 (24).webp",
        "assets/CR7 Kits/cr7 (25).webp",
        "assets/CR7 Kits/cr7 (26).webp",
        "assets/CR7 Kits/cr7 (27).webp",
        "assets/CR7 Kits/cr7 (28).webp",
        "assets/CR7 Kits/cr7 (29).webp",
        "assets/CR7 Kits/cr7 (3).webp",
        "assets/CR7 Kits/cr7 (30).webp",
        "assets/CR7 Kits/cr7 (31).webp",
        "assets/CR7 Kits/cr7 (32).webp",
        "assets/CR7 Kits/cr7 (33).webp",
        "assets/CR7 Kits/cr7 (34).webp",
        "assets/CR7 Kits/cr7 (35).webp",
        "assets/CR7 Kits/cr7 (4).webp",
        "assets/CR7 Kits/cr7 (5).webp",
        "assets/CR7 Kits/cr7 (6).webp",
        "assets/CR7 Kits/cr7 (7).webp",
        "assets/CR7 Kits/cr7 (8).webp",
        "assets/CR7 Kits/cr7 (9).webp"
    ],
    "Cricket Kits": [
        "assets/Cricket Kits/crc (1).jpeg",
        "assets/Cricket Kits/crc (1).jpg",
        "assets/Cricket Kits/crc (1).webp",
        "assets/Cricket Kits/crc (2).jpeg",
        "assets/Cricket Kits/crc (2).jpg",
        "assets/Cricket Kits/crc (3).jpeg",
        "assets/Cricket Kits/crc (3).jpg",
        "assets/Cricket Kits/crc (4).jpeg",
        "assets/Cricket Kits/crc (4).jpg",
        "assets/Cricket Kits/crc (5).jpeg",
        "assets/Cricket Kits/crc (5).jpg"
    ],
    "Full sleeve kits": [
        "assets/Full sleeve kits/fullsleve (1).jpeg",
        "assets/Full sleeve kits/fullsleve (1).jpg",
        "assets/Full sleeve kits/fullsleve (1).webp",
        "assets/Full sleeve kits/fullsleve (10).webp",
        "assets/Full sleeve kits/fullsleve (11).webp",
        "assets/Full sleeve kits/fullsleve (12).webp",
        "assets/Full sleeve kits/fullsleve (13).webp",
        "assets/Full sleeve kits/fullsleve (14).webp",
        "assets/Full sleeve kits/fullsleve (15).webp",
        "assets/Full sleeve kits/fullsleve (16).webp",
        "assets/Full sleeve kits/fullsleve (17).webp",
        "assets/Full sleeve kits/fullsleve (18).webp",
        "assets/Full sleeve kits/fullsleve (19).webp",
        "assets/Full sleeve kits/fullsleve (2).jpeg",
        "assets/Full sleeve kits/fullsleve (2).webp",
        "assets/Full sleeve kits/fullsleve (20).webp",
        "assets/Full sleeve kits/fullsleve (21).webp",
        "assets/Full sleeve kits/fullsleve (22).webp",
        "assets/Full sleeve kits/fullsleve (23).webp",
        "assets/Full sleeve kits/fullsleve (24).webp",
        "assets/Full sleeve kits/fullsleve (25).webp",
        "assets/Full sleeve kits/fullsleve (26).webp",
        "assets/Full sleeve kits/fullsleve (27).webp",
        "assets/Full sleeve kits/fullsleve (28).webp",
        "assets/Full sleeve kits/fullsleve (29).webp",
        "assets/Full sleeve kits/fullsleve (3).jpeg",
        "assets/Full sleeve kits/fullsleve (3).webp",
        "assets/Full sleeve kits/fullsleve (30).webp",
        "assets/Full sleeve kits/fullsleve (31).webp",
        "assets/Full sleeve kits/fullsleve (32).webp",
        "assets/Full sleeve kits/fullsleve (33).webp",
        "assets/Full sleeve kits/fullsleve (34).webp",
        "assets/Full sleeve kits/fullsleve (35).webp",
        "assets/Full sleeve kits/fullsleve (36).webp",
        "assets/Full sleeve kits/fullsleve (37).webp",
        "assets/Full sleeve kits/fullsleve (38).webp",
        "assets/Full sleeve kits/fullsleve (39).webp",
        "assets/Full sleeve kits/fullsleve (4).webp",
        "assets/Full sleeve kits/fullsleve (40).webp",
        "assets/Full sleeve kits/fullsleve (41).webp",
        "assets/Full sleeve kits/fullsleve (5).webp",
        "assets/Full sleeve kits/fullsleve (6).webp",
        "assets/Full sleeve kits/fullsleve (7).webp",
        "assets/Full sleeve kits/fullsleve (8).webp",
        "assets/Full sleeve kits/fullsleve (9).webp"
    ],
    "Half sleeves kits": [
        "assets/Half sleeves kits/halfsleeve (1).jpg",
        "assets/Half sleeves kits/halfsleeve (1).webp",
        "assets/Half sleeves kits/halfsleeve (10).webp",
        "assets/Half sleeves kits/halfsleeve (11).webp",
        "assets/Half sleeves kits/halfsleeve (12).webp",
        "assets/Half sleeves kits/halfsleeve (13).webp",
        "assets/Half sleeves kits/halfsleeve (14).webp",
        "assets/Half sleeves kits/halfsleeve (15).webp",
        "assets/Half sleeves kits/halfsleeve (16).webp",
        "assets/Half sleeves kits/halfsleeve (17).webp",
        "assets/Half sleeves kits/halfsleeve (18).webp",
        "assets/Half sleeves kits/halfsleeve (19).webp",
        "assets/Half sleeves kits/halfsleeve (2).webp",
        "assets/Half sleeves kits/halfsleeve (20).webp",
        "assets/Half sleeves kits/halfsleeve (21).webp",
        "assets/Half sleeves kits/halfsleeve (22).webp",
        "assets/Half sleeves kits/halfsleeve (23).webp",
        "assets/Half sleeves kits/halfsleeve (24).webp",
        "assets/Half sleeves kits/halfsleeve (25).webp",
        "assets/Half sleeves kits/halfsleeve (26).webp",
        "assets/Half sleeves kits/halfsleeve (27).webp",
        "assets/Half sleeves kits/halfsleeve (28).webp",
        "assets/Half sleeves kits/halfsleeve (29).webp",
        "assets/Half sleeves kits/halfsleeve (3).webp",
        "assets/Half sleeves kits/halfsleeve (30).webp",
        "assets/Half sleeves kits/halfsleeve (31).webp",
        "assets/Half sleeves kits/halfsleeve (32).webp",
        "assets/Half sleeves kits/halfsleeve (33).webp",
        "assets/Half sleeves kits/halfsleeve (34).webp",
        "assets/Half sleeves kits/halfsleeve (35).webp",
        "assets/Half sleeves kits/halfsleeve (36).webp",
        "assets/Half sleeves kits/halfsleeve (4).webp",
        "assets/Half sleeves kits/halfsleeve (5).webp",
        "assets/Half sleeves kits/halfsleeve (6).webp",
        "assets/Half sleeves kits/halfsleeve (7).webp",
        "assets/Half sleeves kits/halfsleeve (8).webp",
        "assets/Half sleeves kits/halfsleeve (9).webp"
    ],
    "Kaka kits": [
        "assets/Kaka kits/kaka (1).webp",
        "assets/Kaka kits/kaka (2).webp",
        "assets/Kaka kits/kaka (3).webp",
        "assets/Kaka kits/kaka (4).webp",
        "assets/Kaka kits/kaka (5).webp",
        "assets/Kaka kits/kaka (6).webp",
        "assets/Kaka kits/kaka (7).webp",
        "assets/Kaka kits/kaka (8).webp"
    ],
    "Maldini kits": [
        "assets/Maldini kits/maldini (1).jpeg",
        "assets/Maldini kits/maldini (1).webp",
        "assets/Maldini kits/maldini (10).webp",
        "assets/Maldini kits/maldini (11).webp",
        "assets/Maldini kits/maldini (12).webp",
        "assets/Maldini kits/maldini (13).webp",
        "assets/Maldini kits/maldini (14).webp",
        "assets/Maldini kits/maldini (15).webp",
        "assets/Maldini kits/maldini (16).webp",
        "assets/Maldini kits/maldini (17).webp",
        "assets/Maldini kits/maldini (2).webp",
        "assets/Maldini kits/maldini (3).webp",
        "assets/Maldini kits/maldini (4).webp",
        "assets/Maldini kits/maldini (5).webp",
        "assets/Maldini kits/maldini (6).webp",
        "assets/Maldini kits/maldini (7).webp",
        "assets/Maldini kits/maldini (8).webp",
        "assets/Maldini kits/maldini (9).webp"
    ],
    "Man united kits": [
        "assets/Man united kits/manu (1).jpeg",
        "assets/Man united kits/manu (1).jpg",
        "assets/Man united kits/manu (1).webp",
        "assets/Man united kits/manu (10).webp",
        "assets/Man united kits/manu (11).webp",
        "assets/Man united kits/manu (12).webp",
        "assets/Man united kits/manu (13).webp",
        "assets/Man united kits/manu (14).webp",
        "assets/Man united kits/manu (15).webp",
        "assets/Man united kits/manu (16).webp",
        "assets/Man united kits/manu (17).webp",
        "assets/Man united kits/manu (18).webp",
        "assets/Man united kits/manu (19).webp",
        "assets/Man united kits/manu (2).webp",
        "assets/Man united kits/manu (20).webp",
        "assets/Man united kits/manu (21).webp",
        "assets/Man united kits/manu (22).webp",
        "assets/Man united kits/manu (3).webp",
        "assets/Man united kits/manu (4).webp",
        "assets/Man united kits/manu (5).webp",
        "assets/Man united kits/manu (6).webp",
        "assets/Man united kits/manu (7).webp",
        "assets/Man united kits/manu (8).webp",
        "assets/Man united kits/manu (9).webp"
    ],
    "Messi Kits": [
        "assets/Messi Kits/messi (1).jpeg",
        "assets/Messi Kits/messi (1).webp",
        "assets/Messi Kits/messi (10).webp",
        "assets/Messi Kits/messi (11).webp",
        "assets/Messi Kits/messi (12).webp",
        "assets/Messi Kits/messi (13).webp",
        "assets/Messi Kits/messi (14).webp",
        "assets/Messi Kits/messi (15).webp",
        "assets/Messi Kits/messi (16).webp",
        "assets/Messi Kits/messi (17).webp",
        "assets/Messi Kits/messi (18).webp",
        "assets/Messi Kits/messi (19).webp",
        "assets/Messi Kits/messi (2).jpeg",
        "assets/Messi Kits/messi (2).webp",
        "assets/Messi Kits/messi (20).webp",
        "assets/Messi Kits/messi (21).webp",
        "assets/Messi Kits/messi (22).webp",
        "assets/Messi Kits/messi (23).webp",
        "assets/Messi Kits/messi (24).webp",
        "assets/Messi Kits/messi (25).webp",
        "assets/Messi Kits/messi (26).webp",
        "assets/Messi Kits/messi (27).webp",
        "assets/Messi Kits/messi (28).webp",
        "assets/Messi Kits/messi (3).webp",
        "assets/Messi Kits/messi (4).webp",
        "assets/Messi Kits/messi (5).webp",
        "assets/Messi Kits/messi (6).webp",
        "assets/Messi Kits/messi (7).webp",
        "assets/Messi Kits/messi (8).webp",
        "assets/Messi Kits/messi (9).webp"
    ],
    "National team kits": [
        "assets/National team kits/national (1).webp",
        "assets/National team kits/national (10).webp",
        "assets/National team kits/national (11).webp",
        "assets/National team kits/national (12).webp",
        "assets/National team kits/national (13).webp",
        "assets/National team kits/national (14).webp",
        "assets/National team kits/national (15).webp",
        "assets/National team kits/national (16).webp",
        "assets/National team kits/national (17).webp",
        "assets/National team kits/national (18).webp",
        "assets/National team kits/national (19).webp",
        "assets/National team kits/national (2).webp",
        "assets/National team kits/national (20).webp",
        "assets/National team kits/national (21).webp",
        "assets/National team kits/national (22).webp",
        "assets/National team kits/national (23).webp",
        "assets/National team kits/national (24).webp",
        "assets/National team kits/national (25).webp",
        "assets/National team kits/national (26).webp",
        "assets/National team kits/national (27).webp",
        "assets/National team kits/national (28).webp",
        "assets/National team kits/national (29).webp",
        "assets/National team kits/national (3).webp",
        "assets/National team kits/national (30).webp",
        "assets/National team kits/national (31).webp",
        "assets/National team kits/national (32).webp",
        "assets/National team kits/national (33).webp",
        "assets/National team kits/national (34).webp",
        "assets/National team kits/national (35).webp",
        "assets/National team kits/national (36).webp",
        "assets/National team kits/national (37).webp",
        "assets/National team kits/national (38).webp",
        "assets/National team kits/national (39).webp",
        "assets/National team kits/national (4).webp",
        "assets/National team kits/national (40).webp",
        "assets/National team kits/national (41).webp",
        "assets/National team kits/national (42).webp",
        "assets/National team kits/national (43).webp",
        "assets/National team kits/national (44).webp",
        "assets/National team kits/national (45).webp",
        "assets/National team kits/national (46).webp",
        "assets/National team kits/national (47).webp",
        "assets/National team kits/national (48).webp",
        "assets/National team kits/national (49).webp",
        "assets/National team kits/national (5).webp",
        "assets/National team kits/national (50).webp",
        "assets/National team kits/national (6).webp",
        "assets/National team kits/national (7).webp",
        "assets/National team kits/national (8).webp",
        "assets/National team kits/national (9).webp"
    ],
    "Neymar Kits": [
        "assets/Neymar Kits/neymar (1).jpeg",
        "assets/Neymar Kits/neymar (1).webp",
        "assets/Neymar Kits/neymar (10).webp",
        "assets/Neymar Kits/neymar (11).webp",
        "assets/Neymar Kits/neymar (12).webp",
        "assets/Neymar Kits/neymar (13).webp",
        "assets/Neymar Kits/neymar (14).webp",
        "assets/Neymar Kits/neymar (15).webp",
        "assets/Neymar Kits/neymar (16).webp",
        "assets/Neymar Kits/neymar (17).webp",
        "assets/Neymar Kits/neymar (18).webp",
        "assets/Neymar Kits/neymar (2).jpeg",
        "assets/Neymar Kits/neymar (2).webp",
        "assets/Neymar Kits/neymar (3).webp",
        "assets/Neymar Kits/neymar (4).webp",
        "assets/Neymar Kits/neymar (5).webp",
        "assets/Neymar Kits/neymar (6).webp",
        "assets/Neymar Kits/neymar (7).webp",
        "assets/Neymar Kits/neymar (8).webp",
        "assets/Neymar Kits/neymar (9).webp"
    ],
    "Oversized kits": [
        "assets/Oversized kits/oversized (1).jpeg",
        "assets/Oversized kits/oversized (1).webp",
        "assets/Oversized kits/oversized (10).webp",
        "assets/Oversized kits/oversized (11).webp",
        "assets/Oversized kits/oversized (12).webp",
        "assets/Oversized kits/oversized (13).webp",
        "assets/Oversized kits/oversized (14).webp",
        "assets/Oversized kits/oversized (15).webp",
        "assets/Oversized kits/oversized (16).webp",
        "assets/Oversized kits/oversized (17).webp",
        "assets/Oversized kits/oversized (18).webp",
        "assets/Oversized kits/oversized (19).webp",
        "assets/Oversized kits/oversized (2).jpeg",
        "assets/Oversized kits/oversized (2).webp",
        "assets/Oversized kits/oversized (20).webp",
        "assets/Oversized kits/oversized (21).webp",
        "assets/Oversized kits/oversized (22).webp",
        "assets/Oversized kits/oversized (23).webp",
        "assets/Oversized kits/oversized (24).webp",
        "assets/Oversized kits/oversized (25).webp",
        "assets/Oversized kits/oversized (26).webp",
        "assets/Oversized kits/oversized (27).webp",
        "assets/Oversized kits/oversized (28).webp",
        "assets/Oversized kits/oversized (29).webp",
        "assets/Oversized kits/oversized (3).jpeg",
        "assets/Oversized kits/oversized (3).webp",
        "assets/Oversized kits/oversized (30).webp",
        "assets/Oversized kits/oversized (31).webp",
        "assets/Oversized kits/oversized (32).webp",
        "assets/Oversized kits/oversized (33).webp",
        "assets/Oversized kits/oversized (34).webp",
        "assets/Oversized kits/oversized (4).webp",
        "assets/Oversized kits/oversized (5).webp",
        "assets/Oversized kits/oversized (6).webp",
        "assets/Oversized kits/oversized (7).webp",
        "assets/Oversized kits/oversized (8).webp",
        "assets/Oversized kits/oversized (9).webp"
    ],
    "Polo collar kits": [
        "assets/Polo collar kits/polo (1).jpeg",
        "assets/Polo collar kits/polo (1).jpg",
        "assets/Polo collar kits/polo (1).webp",
        "assets/Polo collar kits/polo (10).webp",
        "assets/Polo collar kits/polo (11).webp",
        "assets/Polo collar kits/polo (12).webp",
        "assets/Polo collar kits/polo (13).webp",
        "assets/Polo collar kits/polo (14).webp",
        "assets/Polo collar kits/polo (15).webp",
        "assets/Polo collar kits/polo (16).webp",
        "assets/Polo collar kits/polo (17).webp",
        "assets/Polo collar kits/polo (18).webp",
        "assets/Polo collar kits/polo (19).webp",
        "assets/Polo collar kits/polo (2).jpeg",
        "assets/Polo collar kits/polo (2).jpg",
        "assets/Polo collar kits/polo (2).webp",
        "assets/Polo collar kits/polo (20).webp",
        "assets/Polo collar kits/polo (21).webp",
        "assets/Polo collar kits/polo (22).webp",
        "assets/Polo collar kits/polo (23).webp",
        "assets/Polo collar kits/polo (24).webp",
        "assets/Polo collar kits/polo (25).webp",
        "assets/Polo collar kits/polo (26).webp",
        "assets/Polo collar kits/polo (27).webp",
        "assets/Polo collar kits/polo (28).webp",
        "assets/Polo collar kits/polo (29).webp",
        "assets/Polo collar kits/polo (3).jpeg",
        "assets/Polo collar kits/polo (3).jpg",
        "assets/Polo collar kits/polo (3).webp",
        "assets/Polo collar kits/polo (30).webp",
        "assets/Polo collar kits/polo (31).webp",
        "assets/Polo collar kits/polo (32).webp",
        "assets/Polo collar kits/polo (33).webp",
        "assets/Polo collar kits/polo (34).webp",
        "assets/Polo collar kits/polo (35).webp",
        "assets/Polo collar kits/polo (36).webp",
        "assets/Polo collar kits/polo (37).webp",
        "assets/Polo collar kits/polo (38).webp",
        "assets/Polo collar kits/polo (39).webp",
        "assets/Polo collar kits/polo (4).jpeg",
        "assets/Polo collar kits/polo (4).webp",
        "assets/Polo collar kits/polo (40).webp",
        "assets/Polo collar kits/polo (41).webp",
        "assets/Polo collar kits/polo (42).webp",
        "assets/Polo collar kits/polo (43).webp",
        "assets/Polo collar kits/polo (44).webp",
        "assets/Polo collar kits/polo (45).webp",
        "assets/Polo collar kits/polo (46).webp",
        "assets/Polo collar kits/polo (47).webp",
        "assets/Polo collar kits/polo (48).webp",
        "assets/Polo collar kits/polo (49).webp",
        "assets/Polo collar kits/polo (5).jpeg",
        "assets/Polo collar kits/polo (5).webp",
        "assets/Polo collar kits/polo (50).webp",
        "assets/Polo collar kits/polo (51).webp",
        "assets/Polo collar kits/polo (52).webp",
        "assets/Polo collar kits/polo (53).webp",
        "assets/Polo collar kits/polo (54).webp",
        "assets/Polo collar kits/polo (55).webp",
        "assets/Polo collar kits/polo (56).webp",
        "assets/Polo collar kits/polo (57).webp",
        "assets/Polo collar kits/polo (58).webp",
        "assets/Polo collar kits/polo (59).webp",
        "assets/Polo collar kits/polo (6).jpeg",
        "assets/Polo collar kits/polo (6).webp",
        "assets/Polo collar kits/polo (60).webp",
        "assets/Polo collar kits/polo (61).webp",
        "assets/Polo collar kits/polo (62).webp",
        "assets/Polo collar kits/polo (63).webp",
        "assets/Polo collar kits/polo (64).webp",
        "assets/Polo collar kits/polo (65).webp",
        "assets/Polo collar kits/polo (66).webp",
        "assets/Polo collar kits/polo (67).webp",
        "assets/Polo collar kits/polo (68).webp",
        "assets/Polo collar kits/polo (69).webp",
        "assets/Polo collar kits/polo (7).jpeg",
        "assets/Polo collar kits/polo (7).webp",
        "assets/Polo collar kits/polo (70).webp",
        "assets/Polo collar kits/polo (71).webp",
        "assets/Polo collar kits/polo (72).webp",
        "assets/Polo collar kits/polo (73).webp",
        "assets/Polo collar kits/polo (74).webp",
        "assets/Polo collar kits/polo (75).webp",
        "assets/Polo collar kits/polo (8).webp",
        "assets/Polo collar kits/polo (9).webp"
    ],
    "Real Madrid kits": [
        "assets/Real Madrid kits/madrid (1).jpeg",
        "assets/Real Madrid kits/madrid (1).jpg",
        "assets/Real Madrid kits/madrid (1).webp",
        "assets/Real Madrid kits/madrid (10).webp",
        "assets/Real Madrid kits/madrid (11).webp",
        "assets/Real Madrid kits/madrid (12).webp",
        "assets/Real Madrid kits/madrid (13).webp",
        "assets/Real Madrid kits/madrid (14).webp",
        "assets/Real Madrid kits/madrid (15).webp",
        "assets/Real Madrid kits/madrid (16).webp",
        "assets/Real Madrid kits/madrid (17).webp",
        "assets/Real Madrid kits/madrid (18).webp",
        "assets/Real Madrid kits/madrid (19).webp",
        "assets/Real Madrid kits/madrid (2).jpeg",
        "assets/Real Madrid kits/madrid (2).jpg",
        "assets/Real Madrid kits/madrid (2).webp",
        "assets/Real Madrid kits/madrid (20).webp",
        "assets/Real Madrid kits/madrid (21).webp",
        "assets/Real Madrid kits/madrid (22).webp",
        "assets/Real Madrid kits/madrid (23).webp",
        "assets/Real Madrid kits/madrid (24).webp",
        "assets/Real Madrid kits/madrid (25).webp",
        "assets/Real Madrid kits/madrid (26).webp",
        "assets/Real Madrid kits/madrid (27).webp",
        "assets/Real Madrid kits/madrid (28).webp",
        "assets/Real Madrid kits/madrid (29).webp",
        "assets/Real Madrid kits/madrid (3).jpeg",
        "assets/Real Madrid kits/madrid (3).jpg",
        "assets/Real Madrid kits/madrid (3).webp",
        "assets/Real Madrid kits/madrid (30).webp",
        "assets/Real Madrid kits/madrid (31).webp",
        "assets/Real Madrid kits/madrid (32).webp",
        "assets/Real Madrid kits/madrid (33).webp",
        "assets/Real Madrid kits/madrid (34).webp",
        "assets/Real Madrid kits/madrid (35).webp",
        "assets/Real Madrid kits/madrid (36).webp",
        "assets/Real Madrid kits/madrid (37).webp",
        "assets/Real Madrid kits/madrid (38).webp",
        "assets/Real Madrid kits/madrid (4).jpeg",
        "assets/Real Madrid kits/madrid (4).jpg",
        "assets/Real Madrid kits/madrid (4).webp",
        "assets/Real Madrid kits/madrid (5).jpeg",
        "assets/Real Madrid kits/madrid (5).webp",
        "assets/Real Madrid kits/madrid (6).webp",
        "assets/Real Madrid kits/madrid (7).webp",
        "assets/Real Madrid kits/madrid (8).webp",
        "assets/Real Madrid kits/madrid (9).webp"
    ],
    "Shorts": [
        "assets/Shorts/shorts (1).jpg",
        "assets/Shorts/shorts (2).jpg",
        "assets/Shorts/shorts (3).jpg",
        "assets/Shorts/shorts (4).jpg",
        "assets/Shorts/shorts (5).jpg",
        "assets/Shorts/shorts (6).jpg",
        "assets/Shorts/shorts (7).jpg",
        "assets/Shorts/shorts (8).jpg"
    ],
    "Sleeveless kits": [
        "assets/Sleeveless kits/sleveless (1).webp",
        "assets/Sleeveless kits/sleveless (10).webp",
        "assets/Sleeveless kits/sleveless (11).webp",
        "assets/Sleeveless kits/sleveless (12).webp",
        "assets/Sleeveless kits/sleveless (13).webp",
        "assets/Sleeveless kits/sleveless (14).webp",
        "assets/Sleeveless kits/sleveless (2).webp",
        "assets/Sleeveless kits/sleveless (3).webp",
        "assets/Sleeveless kits/sleveless (4).webp",
        "assets/Sleeveless kits/sleveless (5).webp",
        "assets/Sleeveless kits/sleveless (6).webp",
        "assets/Sleeveless kits/sleveless (7).webp",
        "assets/Sleeveless kits/sleveless (8).webp",
        "assets/Sleeveless kits/sleveless (9).webp"
    ],
    "Special editions": [
        "assets/Special editions/spl_editions (1).jpeg",
        "assets/Special editions/spl_editions (1).webp",
        "assets/Special editions/spl_editions (10).webp",
        "assets/Special editions/spl_editions (11).webp",
        "assets/Special editions/spl_editions (12).webp",
        "assets/Special editions/spl_editions (13).webp",
        "assets/Special editions/spl_editions (14).webp",
        "assets/Special editions/spl_editions (15).webp",
        "assets/Special editions/spl_editions (16).webp",
        "assets/Special editions/spl_editions (2).jpeg",
        "assets/Special editions/spl_editions (2).webp",
        "assets/Special editions/spl_editions (3).webp",
        "assets/Special editions/spl_editions (4).webp",
        "assets/Special editions/spl_editions (5).webp",
        "assets/Special editions/spl_editions (6).webp",
        "assets/Special editions/spl_editions (7).webp",
        "assets/Special editions/spl_editions (8).webp",
        "assets/Special editions/spl_editions (9).webp"
    ],
    "Zidane kits": [
        "assets/Zidane kits/zizou (1).jpg",
        "assets/Zidane kits/zizou (1).webp",
        "assets/Zidane kits/zizou (2).webp",
        "assets/Zidane kits/zizou (3).webp",
        "assets/Zidane kits/zizou (4).webp",
        "assets/Zidane kits/zizou (5).webp",
        "assets/Zidane kits/zizou (6).webp",
        "assets/Zidane kits/zizou (7).webp",
        "assets/Zidane kits/zizou (8).webp",
        "assets/Zidane kits/zizou (9).webp"
    ],
    "₹270 kits": [
        "assets/₹270 kits/270 (1).jpeg",
        "assets/₹270 kits/270 (1).jpg",
        "assets/₹270 kits/270 (1).webp",
        "assets/₹270 kits/270 (10).jpeg",
        "assets/₹270 kits/270 (10).jpg",
        "assets/₹270 kits/270 (11).jpeg",
        "assets/₹270 kits/270 (11).jpg",
        "assets/₹270 kits/270 (12).jpeg",
        "assets/₹270 kits/270 (12).jpg",
        "assets/₹270 kits/270 (13).jpeg",
        "assets/₹270 kits/270 (13).jpg",
        "assets/₹270 kits/270 (14).jpeg",
        "assets/₹270 kits/270 (14).jpg",
        "assets/₹270 kits/270 (15).jpeg",
        "assets/₹270 kits/270 (15).jpg",
        "assets/₹270 kits/270 (16).jpeg",
        "assets/₹270 kits/270 (16).jpg",
        "assets/₹270 kits/270 (17).jpeg",
        "assets/₹270 kits/270 (17).jpg",
        "assets/₹270 kits/270 (18).jpeg",
        "assets/₹270 kits/270 (18).jpg",
        "assets/₹270 kits/270 (19).jpeg",
        "assets/₹270 kits/270 (19).jpg",
        "assets/₹270 kits/270 (2).jpeg",
        "assets/₹270 kits/270 (2).jpg",
        "assets/₹270 kits/270 (2).webp",
        "assets/₹270 kits/270 (20).jpeg",
        "assets/₹270 kits/270 (20).jpg",
        "assets/₹270 kits/270 (21).jpeg",
        "assets/₹270 kits/270 (21).jpg",
        "assets/₹270 kits/270 (22).jpeg",
        "assets/₹270 kits/270 (22).jpg",
        "assets/₹270 kits/270 (23).jpeg",
        "assets/₹270 kits/270 (23).jpg",
        "assets/₹270 kits/270 (24).jpeg",
        "assets/₹270 kits/270 (24).jpg",
        "assets/₹270 kits/270 (25).jpeg",
        "assets/₹270 kits/270 (25).jpg",
        "assets/₹270 kits/270 (26).jpeg",
        "assets/₹270 kits/270 (26).jpg",
        "assets/₹270 kits/270 (27).jpeg",
        "assets/₹270 kits/270 (27).jpg",
        "assets/₹270 kits/270 (28).jpeg",
        "assets/₹270 kits/270 (28).jpg",
        "assets/₹270 kits/270 (29).jpeg",
        "assets/₹270 kits/270 (29).jpg",
        "assets/₹270 kits/270 (3).jpeg",
        "assets/₹270 kits/270 (3).jpg",
        "assets/₹270 kits/270 (3).webp",
        "assets/₹270 kits/270 (30).jpeg",
        "assets/₹270 kits/270 (30).jpg",
        "assets/₹270 kits/270 (31).jpeg",
        "assets/₹270 kits/270 (31).jpg",
        "assets/₹270 kits/270 (32).jpeg",
        "assets/₹270 kits/270 (32).jpg",
        "assets/₹270 kits/270 (33).jpeg",
        "assets/₹270 kits/270 (33).jpg",
        "assets/₹270 kits/270 (34).jpeg",
        "assets/₹270 kits/270 (34).jpg",
        "assets/₹270 kits/270 (35).jpeg",
        "assets/₹270 kits/270 (35).jpg",
        "assets/₹270 kits/270 (36).jpg",
        "assets/₹270 kits/270 (37).jpg",
        "assets/₹270 kits/270 (38).jpg",
        "assets/₹270 kits/270 (39).jpg",
        "assets/₹270 kits/270 (4).jpeg",
        "assets/₹270 kits/270 (4).jpg",
        "assets/₹270 kits/270 (40).jpg",
        "assets/₹270 kits/270 (41).jpg",
        "assets/₹270 kits/270 (42).jpg",
        "assets/₹270 kits/270 (43).jpg",
        "assets/₹270 kits/270 (44).jpg",
        "assets/₹270 kits/270 (45).jpg",
        "assets/₹270 kits/270 (46).jpg",
        "assets/₹270 kits/270 (47).jpg",
        "assets/₹270 kits/270 (48).jpg",
        "assets/₹270 kits/270 (49).jpg",
        "assets/₹270 kits/270 (5).jpeg",
        "assets/₹270 kits/270 (5).jpg",
        "assets/₹270 kits/270 (50).jpg",
        "assets/₹270 kits/270 (51).jpg",
        "assets/₹270 kits/270 (52).jpg",
        "assets/₹270 kits/270 (53).jpg",
        "assets/₹270 kits/270 (54).jpg",
        "assets/₹270 kits/270 (55).jpg",
        "assets/₹270 kits/270 (56).jpg",
        "assets/₹270 kits/270 (57).jpg",
        "assets/₹270 kits/270 (58).jpg",
        "assets/₹270 kits/270 (59).jpg",
        "assets/₹270 kits/270 (6).jpeg",
        "assets/₹270 kits/270 (6).jpg",
        "assets/₹270 kits/270 (60).jpg",
        "assets/₹270 kits/270 (61).jpg",
        "assets/₹270 kits/270 (62).jpg",
        "assets/₹270 kits/270 (63).jpg",
        "assets/₹270 kits/270 (64).jpg",
        "assets/₹270 kits/270 (65).jpg",
        "assets/₹270 kits/270 (66).jpg",
        "assets/₹270 kits/270 (7).jpeg",
        "assets/₹270 kits/270 (7).jpg",
        "assets/₹270 kits/270 (8).jpeg",
        "assets/₹270 kits/270 (8).jpg",
        "assets/₹270 kits/270 (9).jpeg",
        "assets/₹270 kits/270 (9).jpg"
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    
    // Config
    const whatsappBaseUrl = "https://wa.me/918891065870";

    const allJerseysGrid = document.getElementById("allJerseysGrid");
    const categorySectionsContainer = document.getElementById("categorySectionsContainer");
    const categoryFilters = document.getElementById("categoryFilters");
    const searchInput = document.getElementById("searchInput");
    
    // Flatten data for "All Jerseys" grid
    let allJerseys = [];

    // Helpers
    function getPriceForCategory(category) {
        const c = category.toLowerCase();
        if (["ac milan kits", "barca kits", "real madrid kits", "man united kits"].includes(c)) return "₹350";
        if (["cr7 kits", "messi kits", "neymar kits", "zidane kits", "kaka kits", "beckham kits", "maldini kits"].includes(c)) return "₹400";
        if (["national team kits"].includes(c)) return "₹320";
        if (["shorts", "sleeveless kits"].includes(c)) return "₹290";
        if (["special editions"].includes(c)) return "₹380";
        if (["oversized kits", "polo collar kits", "full sleeve kits", "half sleeves kits"].includes(c)) return "₹310";
        if (["anime kits", "cricket kits"].includes(c)) return "₹299";
        return "₹270"; // default
    }

    function generateJerseyName(path) {
        const filename = path.split('/').pop().split('.')[0];
        return filename.replace(/[_-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }

    function createSlug(str) {
        return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    function getWhatsappLink(jerseyName) {
        const msg = encodeURIComponent(`Hi Footiq! I'm interested in ordering a jersey - ${jerseyName}`);
        return `${whatsappBaseUrl}?text=${msg}`;
    }

    // Build Data
    for (const [category, paths] of Object.entries(window.catalogueData)) {
        const slug = createSlug(category);
        const price = getPriceForCategory(category);
        
        // Add Filter Pill
        const pill = document.createElement("button");
        pill.className = "filter-pill";
        pill.dataset.category = slug;
        pill.innerText = category;
        categoryFilters.appendChild(pill);
        
        // Build Section for this category
        const section = document.createElement("div");
        section.className = "category-section";
        section.id = slug;
        section.dataset.category = slug;
        section.innerHTML = `
            <h2 class="category-section-title reveal">${category}</h2>
            <div class="jersey-grid" id="grid-${slug}"></div>
        `;
        categorySectionsContainer.appendChild(section);
        
        const sectionGrid = section.querySelector(".jersey-grid");
        
        paths.forEach(path => {
            const name = generateJerseyName(path);
            const jerseyObj = { category, slug, price, name, path };
            allJerseys.push(jerseyObj);
            
            // Render card in category section
            sectionGrid.appendChild(createJerseyCard(jerseyObj));
        });
    }

    // Render "All Jerseys" initial grid
    allJerseys.forEach(jersey => {
        allJerseysGrid.appendChild(createJerseyCard(jersey));
    });

    // Render Function
    function createJerseyCard({category, slug, price, name, path}) {
        const card = document.createElement("div");
        card.className = "jersey-card reveal";
        card.dataset.name = name.toLowerCase();
        card.dataset.category = slug;
        
        card.innerHTML = `
            <div class="jersey-img-wrap">
                <span class="jersey-badge">${category}</span>
                <img src="${path}" alt="${name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x500/111/1aff4e?text=No+Image'">
            </div>
            <div class="jersey-info">
                <h3 class="jersey-name">${name}</h3>
                <div class="jersey-price">${price}</div>
                <a href="${getWhatsappLink(name)}" target="_blank" class="btn btn-outline jersey-order-btn">
                    Order Now <i class="fa-brands fa-whatsapp" style="margin-left:5px;"></i>
                </a>
            </div>
        `;
        return card;
    }

    // Initialize Reveals for dynamically added elements
    const newReveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    newReveals.forEach(el => revealObserver.observe(el));


    // Filtering Logic
    const pills = document.querySelectorAll(".filter-pill");
    const allJerseysSection = document.getElementById("allJerseysSection");
    
    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            // Update active state
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            
            const selectedCat = pill.dataset.category;
            
            // If "all", show top grid and hide section grids (or show everything)
            // The prompt says: "Clicking filters the grid by category"
            // For best UX: if "all", show the main allJerseysSection, and maybe show category sections as well?
            // "Show ALL jerseys from ALL subfolders in one masonry/grid layout first (this is the default view)"
            
            if (selectedCat === "all") {
                allJerseysSection.style.display = "block";
                document.querySelectorAll(".category-section").forEach(sec => sec.style.display = "block");
                
                // Show all cards in top grid
                document.querySelectorAll("#allJerseysGrid .jersey-card").forEach(card => card.style.display = "flex");
            } else {
                // Option A: Hide the top grid, scroll to the specific section
                allJerseysSection.style.display = "none";
                document.querySelectorAll(".category-section").forEach(sec => {
                    if (sec.dataset.category === selectedCat) {
                        sec.style.display = "block";
                    } else {
                        sec.style.display = "none";
                    }
                });
            }
        });
    });

    // Search Logic (filters the allJerseysGrid and specific sections)
    searchInput.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase();
        
        // Force "All" view when searching
        const allPill = document.querySelector('.filter-pill[data-category="all"]');
        if (term !== "" && !allPill.classList.contains("active")) {
            allPill.click(); 
        }

        // Filter the UI
        document.querySelectorAll(".jersey-card").forEach(card => {
            if (card.dataset.name.includes(term) || card.dataset.category.includes(term.replace(' ', '-'))) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });

    // Check hash for linking from home page (e.g. catalogue.html#messi-kits)
    if (window.location.hash) {
        const targetSlug = window.location.hash.substring(1);
        const targetPill = document.querySelector(`.filter-pill[data-category="${targetSlug}"]`);
        if (targetPill) {
            // Need a slight timeout for rendering
            setTimeout(() => {
                targetPill.click();
            }, 100);
        }
    }
});
