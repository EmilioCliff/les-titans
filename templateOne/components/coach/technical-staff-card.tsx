import Image from 'next/image';
import type { TechnicalStaff } from '@/lib/coaches-data';

interface TechnicalStaffCardProps {
	staff: TechnicalStaff;
}

export function TechnicalStaffCard({ staff }: TechnicalStaffCardProps) {
	return (
		<div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all">
			<div className="relative aspect-square">
				<Image
					src={staff.image || '/placeholder.svg'}
					alt={staff.name}
					fill
					className="object-cover group-hover:scale-105 transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

				{/* Years Badge */}
				<div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm border border-border rounded-sm px-2 py-1 text-center">
					<p className="font-display text-sm font-bold text-primary">
						{staff.yearsInvolved}
					</p>
					<p className="text-[8px] text-muted-foreground uppercase tracking-wider">
						Years
					</p>
				</div>

				{/* Info Overlay */}
				<div className="absolute bottom-0 left-0 right-0 p-4">
					<h3 className="font-display text-lg font-bold text-foreground mb-1">
						{staff.name}
					</h3>
					<p className="text-xs text-primary font-medium mb-1">
						{staff.role}
					</p>
					<p className="text-[10px] text-muted-foreground">
						{staff.specialty}
					</p>
				</div>
			</div>
		</div>
	);
}
